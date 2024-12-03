import { useEffect, useRef, useState } from "react";
import Heading2 from "../../components/Heading2";
import DashboardLayout from "../user-dashboard/DashboardLayout";
import Tab from "./Tab";
import Text from "../../components/Text";
import SubTitle from "../../components/SubTitle";
import SubHeading from "../../components/SubHeading";
import DetailListFormat from "./DetailListFormat";
import IconButton from "../../components/IconButton";
import PaperPlaneTilt from "../../icon/PaperPlaneTilt";

function MyLoans() {
  const activeLoans = [
    {
      loanID: "01",
      loanType: "Car Loan (Personal)",
      amount: 500000,
      nextPayment: { amount: 30000, dueInDays: 5 },
      repaymentDate: "2024-06-22",
    },
    {
      loanID: "02",
      loanType: "Business Loan",
      amount: 100000,
      nextPayment: { amount: 15000, dueInDays: 3 },
      repaymentDate: "2024-06-20",
    },
    {
      loanID: "03",
      loanType: "Marriage Loan (Personal)",
      amount: 50000,
      nextPayment: { amount: 9000, dueInDays: 7 },
      repaymentDate: "2024-06-24",
    },
  ];
  const [activeTab, setActiveTab] = useState("1");
  const [showDetails, setShowDetails] = useState(false);
  const middleRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (middleRef.current && !middleRef.current.contains(event.target)) {
        setShowDetails(false); // Call the function passed via props
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowDetails]);

  return (
    <DashboardLayout active={"loan"}>
      {showDetails && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/15">
          <div className="flex items-center justify-center h-full">
            <div
              ref={middleRef}
              className="w-1/3 rounded-md bg-white border-2 border-gray-300 p-6"
            >
              <Text padding={`py-0`}>Personal Loan</Text>
              <div className="flex items-center justify-between">
                <SubTitle
                  padding={`py-0`}
                  color={`text-accent`}
                  font={`bold font-poppins`}
                >
                  Car Loan
                </SubTitle>
                <div className="rounded-full bg-green-600 text-white text-[10px] sm:text-xs px-4 py-1">
                  Active
                </div>
              </div>
              <Text color={`textColor3`} padding={`pt-0 pb-2`}>
                Loan ID: 01
              </Text>
              <DetailListFormat
                name={"Total Amount"}
                value={"5,00,000"}
                currencySign={true}
              />
              <DetailListFormat
                name={"Paid"}
                value={"1,00,000"}
                currencySign={true}
              />
              <DetailListFormat
                name={"Remaining"}
                value={"4,00,000"}
                currencySign={true}
              />
              <DetailListFormat
                name={"Next Payment"}
                value={"20,000"}
                currencySign={true}
              />
              <DetailListFormat name={"Due Date"} value={"2024-06-22"} />
              <DetailListFormat name={"Term"} value={"36 Months"} />
              <DetailListFormat name={"Repayment Progress"} value={"20%"} />
              <div className="h-2 w-full bg-gray-200 rounded-[40px] mt-1">
                <div
                  style={{ width: `20%` }}
                  className={`h-full bg-gradient-to-r from-[#ff6b00] via-[#803600] via-slate-50 to-[#ff6b00] rounded-[40px]`}
                ></div>
              </div>
              <div className="mt-4">
                <IconButton bg={`accent w-full`} text={`make payment`}>
                  <PaperPlaneTilt />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="h-full bg-white rounded-md px-8 py-6">
        <Heading2 font={`font-bold font-poppins`}>Loan Details</Heading2>
        <div className="my-6 p-[3px] bg-gray-200 rounded-md flex justify-normal items-center">
          <Tab
            activeTab={activeTab}
            index={"1"}
            onClick={() => setActiveTab("1")}
          >
            Active Loans
          </Tab>
          <Tab
            activeTab={activeTab}
            index={"2"}
            onClick={() => setActiveTab("2")}
          >
            Pending Applications
          </Tab>
          <Tab
            activeTab={activeTab}
            index={"3"}
            onClick={() => setActiveTab("3")}
          >
            Incomplete Applications
          </Tab>
          <Tab
            activeTab={activeTab}
            index={"4"}
            onClick={() => setActiveTab("4")}
          >
            Closed Loans
          </Tab>
        </div>
        {activeTab == 1 && (
          <>
            <div className="w-full flex px-2 items-center border-b border-b-textColor3 py-1">
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[10%]`}
              >
                Loan ID
              </Text>
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[25%]`}
              >
                Loan Type
              </Text>
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[15%]`}
              >
                Amount
              </Text>
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[22%]`}
              >
                Next Payment
              </Text>
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[16%]`}
              >
                Repayment Date
              </Text>
              <Text
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-left w-[12%]`}
              >
                Action
              </Text>
            </div>
            {activeLoans.map((item, index) => (
              <div
                key={index}
                className="w-full flex px-2 items-center border-b border-b-textColor3 py-1"
              >
                <Text
                  font={`font-semibold`}
                  color={`textColor3`}
                  align={`text-left w-[10%]`}
                >
                  {item.loanID}
                </Text>
                <Text
                  font={`font-semibold`}
                  color={`textColor3`}
                  align={`text-left w-[25%]`}
                >
                  {item.loanType}
                </Text>
                <Text
                  font={`font-semibold`}
                  color={`textColor3`}
                  align={`text-left w-[15%]`}
                >
                  ৳ {item.amount}
                </Text>
                <Text
                  font={`font-semibold`}
                  color={`textColor3`}
                  align={`text-left w-[22%]`}
                >
                  {`৳ ${item.nextPayment.amount} (Due in ${item.nextPayment.dueInDays} days)`}
                </Text>
                <Text
                  font={`font-semibold`}
                  color={`textColor3`}
                  align={`text-left w-[16%]`}
                >
                  {item.repaymentDate}
                </Text>
                <Text
                  font={`font-semibold`}
                  color={`textColor3`}
                  align={`text-left w-[12%]`}
                >
                  <button
                    onClick={() => setShowDetails(true)}
                    className="py-1 px-2 border border-textColor3 rounded-sm hover:bg-accent/20"
                  >
                    <Text color={`textcolor3`}>View Details</Text>
                  </button>
                </Text>
              </div>
            ))}
          </>
        )}
      </div>
    </DashboardLayout>
  );
}

export default MyLoans;
