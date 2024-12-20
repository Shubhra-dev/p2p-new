import { useEffect, useRef, useState } from "react";
import Ticket from "../../assets/Ticket.svg";
import User from "../../assets/profile.jpg";
import Admin from "../../assets/Admin.jpg";
import WeChatLogo from "../../assets/WechatLogo.svg";
import PaperPlaneTilt from "../../icon/PaperPlaneTilt";
import { GrReturn } from "react-icons/gr";
import SubHeading from "../../components/SubHeading";
import Text from "../../components/Text";
import SmallText from "../../components/SmallText";
import {
  getDetailMeetingSchedule,
  getDetailSupportTicket,
} from "../../services/meeting";
import { formatDateTimeTo12Hours } from "../../services/dateFunctions";
import { AiOutlineLoading } from "react-icons/ai";
import Heading2 from "../../components/Heading2";
import { FaUserClock } from "react-icons/fa";
function DetailModal({ setShowDetails, item, userToken }) {
  const [meetingData, setMeetingData] = useState(null);
  const [ticketData, setTicketData] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const middleRef = useRef(null);
  useEffect(() => {
    async function fetchDetailCommunication() {
      try {
        setIsloading(true);
        if (item.type === "Message") {
          const data = await getDetailSupportTicket(userToken, item.id);
          setTicketData(data.result);
          setIsloading(false);
        } else {
          const data = await getDetailMeetingSchedule(userToken, item.id);
          setMeetingData(data.result);
          setIsloading(false);
        }
      } catch (error) {
        setIsError(true);
        setIsloading(false);
      }
    }
    fetchDetailCommunication();
  }, [item.id, item.type, userToken]);

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
    <div className="fixed top-0 left-0 w-full h-screen bg-black/20 z-50">
      <div className="flex items-center justify-center h-full">
        <div
          ref={middleRef}
          className="w-full sm:w-4/5 tab:w-2/3 rounded-md bg-white border-2 border-gray-300 p-3 tab:p-6 max-h-[90%] overflow-y-scroll"
        >
          {isloading && (
            <div className="flex items-center justify-center gap-4">
              <AiOutlineLoading className="animate-spin text-xl text-primary" />
              <Heading2>Loading Data</Heading2>
            </div>
          )}
          {ticketData && (
            <>
              <div className="flex justify-between items-center">
                <div>
                  <SubHeading padding={`py-0`}>
                    ID No: {ticketData.ticket.id}
                  </SubHeading>
                  <Text padding={`py-0`} color={`textColor4`}>
                    {ticketData.ticket.subject}
                  </Text>
                </div>
                <div
                  onClick={() => setShowDetails(false)}
                  className="border border-red-600 bg-red-200 px-2 sm:hidden rounded-md flex gap-1 items-center"
                >
                  <GrReturn className="text-red-600 text-xl" />
                  <SmallText font={`font-semibold`} color={`red-600`}>
                    Close
                  </SmallText>
                </div>
                <img src={Ticket} alt="ticket image" />
              </div>
              <div className="flex gap-4 w-full items-center mt-4">
                <input
                  type="text"
                  placeholder="Your Comment Here.."
                  name="comment"
                  className="resize-none w-[90%] py-2 tab:py-2.5 px-2 border border-textColor3 rounded-md"
                />
                <div className="flex gap-2 items-center py-2 tab:py-2.5 px-4 bg-accent rounded-md">
                  <Text padding={`py-0`} color={`white`} font={`font-semibold`}>
                    Send
                  </Text>
                  <PaperPlaneTilt />
                </div>
              </div>
              <div className="w-max m-auto flex items-center gap-3 mt-3">
                <img src={WeChatLogo} alt="we chat logo" />
                <Text font={`font-semibold`}>Message Replies</Text>
              </div>

              {ticketData.ticket_comments.map((item, index) => (
                <div key={index}>
                  {item.comment_creator_type === "admin" && (
                    <div className="mt-3 w-full flex items-start gap-2">
                      <div className="w-[5%]">
                        <img
                          src={Admin}
                          alt="admin avatar"
                          className="rounded-full"
                        />
                      </div>
                      <div className="w-[95%] bg-gray-200 p-2 rounded-md">
                        <SubHeading padding={`py-0`}>
                          {item.comment_creator_name}
                        </SubHeading>
                        <Text padding={`py-0`}>{item.text}</Text>
                        <SmallText font={`font-semibold`} padding={`pt-1`}>
                          {formatDateTimeTo12Hours(item.created_at)}
                        </SmallText>
                      </div>
                    </div>
                  )}
                  {item.comment_creator_type === "client" && (
                    <div className="mt-4 w-full flex items-start gap-2">
                      <div className="w-[95%] bg-accent/20 p-2 rounded-md">
                        <SubHeading padding={`py-0`}>
                          {item.comment_creator_name}
                        </SubHeading>
                        <Text padding={`py-0`}>{item.text}</Text>
                        <SmallText font={`font-semibold`} padding={`pt-1`}>
                          {formatDateTimeTo12Hours(item.created_at)}
                        </SmallText>
                      </div>
                      <div className="w-[5%]">
                        <img
                          src={User}
                          alt="User avatar"
                          className="rounded-full"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
          {meetingData && (
            <>
              <div className="flex justify-between items-center">
                <div>
                  <SubHeading padding={`py-0`}>
                    ID No: {meetingData.meeting.id}
                  </SubHeading>
                  <Text padding={`py-0`} color={`textColor4`}>
                    {meetingData.meeting.type}
                  </Text>
                </div>
                <div
                  onClick={() => setShowDetails(false)}
                  className="border border-red-600 bg-red-200 px-2 sm:hidden rounded-md flex gap-1 items-center"
                >
                  <GrReturn className="text-red-600 text-xl" />
                  <SmallText font={`font-semibold`} color={`red-600`}>
                    Close
                  </SmallText>
                </div>
                <FaUserClock className="text-3xl text-accent" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailModal;
