import Text from "../../components/Text";
import SubTitle from "../../components/SubTitle";
import PrimaryButton from "../../components/PrimaryButton";
import { useEffect, useState } from "react";
import { FaLessThan } from "react-icons/fa6";
import SubHeading from "../../components/SubHeading";
import { BiLock } from "react-icons/bi";
function OtpCheck({ data, setPage }) {
  const [otp, setOtp] = useState("");
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    // If seconds reach 0, stop the countdown
    if (seconds <= 0) return;

    // Set up the interval
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [seconds]);
  return (
    <>
      <SubTitle align={`text-center`} padding={`pb-2`} font={`font-normal`}>
        Do you provide the right phone number?
      </SubTitle>
      <SubHeading align={`text-center`} padding={`py-0`}>
        Please give the OTP so we can be sure it’s you
      </SubHeading>
      <SubHeading align={`text-center`} padding={`pb-2`}>
        OTP is sent to {data.phone.phoneNumber}
      </SubHeading>
      <div className="mt-4 mb-2 w-full border pr-2 border-gray-400 flex items-center gap-2">
        <input
          type="text"
          name="OTP"
          id="otp"
          className="p-2 w-full"
          placeholder="OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <BiLock className="text-xl text-textColor3" />
      </div>
      <div className="pt-1">
        {seconds > 0 && (
          <Text align={`text-center`} padding={`py-0`} color={`textColor3`}>
            Didn’t get our OTP?
            <span className="text-purple-700"> Resend OTP in {seconds}s.</span>
          </Text>
        )}
        {seconds === 0 && (
          <div
            className="w-max m-auto px-4 cursor-pointer mt-1 border border-accent hover:bg-accent/10"
            onClick={() => setSeconds(60)}
          >
            <Text align={`text-center`} color={`accent`}>
              Resend OTP
            </Text>
          </div>
        )}
      </div>
      <div className="flex gap-2 items-center justify-between pt-4">
        <div
          className="border border-primary p-2 rounded-md"
          onClick={() => setPage(2)}
        >
          <FaLessThan className="text-primary" />
        </div>
        <div className="w-full" onClick={() => setPage(4)}>
          <PrimaryButton width={`w-full`} noIcon={true}>
            Continue
          </PrimaryButton>
        </div>
      </div>
      <Text align={`text-center`} color={`textColor3`}>
        This will not affect your credit score
      </Text>
    </>
  );
}

export default OtpCheck;