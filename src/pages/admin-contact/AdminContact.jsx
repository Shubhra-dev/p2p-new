import DashboardLayout from "../user-dashboard/DashboardLayout";
import { useEffect, useState } from "react";
import DetailModal from "./DetailModal";
import ContactSchedule from "./ContactSchedule";
import RecentCommunication from "./RecentCommunication";
import ContactOptions from "./ContactOptions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRecentCommunication } from "../../services/meeting";

function AdminContact() {
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate("/auth/login");
    }
  }, [user.isLoggedIn, navigate]);
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchIincompleteLoans() {
      if (user.isLoggedIn) {
        try {
          setIsloading(true);
          const data = await getRecentCommunication(user.userToken);
          setData(data.result.recent_communications);
          setFilteredData(data.result.recent_communications);
          setIsloading(false);
        } catch (error) {
          setIsError(true);
          setIsloading(false);
        }
      }
    }
    fetchIincompleteLoans();
  }, [user.isLoggedIn, user.userToken]);

  useEffect(() => {
    if (searchString.trim() === "") {
      setFilteredData(data); // Show all entities if search string is empty
    } else {
      const lowerCaseSearch = searchString.toLowerCase();
      const filtered = data.filter(
        (item) =>
          item.Subject.toLowerCase().includes(lowerCaseSearch) ||
          item.Description.toLowerCase().includes(lowerCaseSearch)
      );
      setFilteredData(filtered);
    }
  }, [searchString, data]);

  return (
    <DashboardLayout active={"admin"}>
      {showDetails && <DetailModal setShowDetails={setShowDetails} />}
      <ContactSchedule />
      <RecentCommunication
        setSearchString={setSearchString}
        filteredData={filteredData}
        setShowDetails={setShowDetails}
        isError={isError}
        isloading={isloading}
      />
      <ContactOptions />
    </DashboardLayout>
  );
}

export default AdminContact;
