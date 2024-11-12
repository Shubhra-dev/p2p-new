import SideBg from "../../assets/logInBg.jpeg";
import Logo from "../../assets/BlackLogo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RiEyeCloseLine, RiEyeLine, RiLockPasswordLine } from "react-icons/ri";
import { BiEnvelope } from "react-icons/bi";
import SubTitle from "../../components/SubTitle";
import { HiLockClosed } from "react-icons/hi2";
import Text from "../../components/Text";
import { PiPhoneCall } from "react-icons/pi";

function LogIn() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [floatingNote, setFloatingNote] = useState({ state: false, msg: "" });
  const [see, setSee] = useState(false);
  return (
    <div className="sm:h-screen w-full flex items-center">
      <div className="w-full px-4 sm:px-0 sm:w-[60%] h-full">
        <div className="flex  h-[85%] w-full items-center">
          <div className="w-full pt-2">
            <img
              src={Logo}
              alt="logo"
              className="w-max m-auto cursor-pointer"
              onClick={() => navigate("/")}
            />
            <SubTitle
              align={`text-center`}
              font={`bold font-poppins`}
              padding={`pt-[10px] tab:pt-[40px] pb-2`}
            >
              Login your account
              <span className="text-accent text-[32px] sm:text-5xl tab:text-6xl">
                .
              </span>
            </SubTitle>
            <div className="my-2 m-auto rounded-md border border-dashed w-full sm:w-3/4 tab:w-1/2 pl-2 border-gray-400 flex items-center gap-2">
              <div className="w-max">{<BiEnvelope className="text-xl" />}</div>
              <input
                type="text"
                name="emailOrPhone"
                id="emailOrPhone"
                className="p-3 w-full rounded-md"
                placeholder="Email / Phone"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
              />
            </div>
            <div className="mt-4 mb-2 m-auto rounded-md border border-dashed w-full sm:w-3/4 tab:w-1/2 px-2 border-gray-400 flex items-center gap-2">
              <div className="w-max">
                {<RiLockPasswordLine className="text-xl" />}
              </div>
              <input
                type={see ? "text" : "password"}
                name="Password"
                id="password"
                className="p-3 w-full"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="w-max" onClick={() => setSee(!see)}>
                {see && <RiEyeLine className="text-xl" />}
                {!see && <RiEyeCloseLine className="text-xl" />}
              </div>
            </div>
            <div className="cursor-pointer flex gap-1 items-center justify-end w-full sm:w-3/4 tab:w-1/2 m-auto">
              <HiLockClosed className="text-textColor3" />
              <Text color={`textColor3`}>Forgot Password</Text>
            </div>
            <div className="pt-2 w-max m-auto">
              <button
                className={`bg-gradient-to-r from-[#0D5152] to-[#1DB6B8] uppercase text-white tab:text-xl font-bold tracking-[4px]  py-2.5 px-[80px] rounded-[10px]`}
              >
                Login
              </button>
            </div>
            <Text
              align={`text-center`}
              color={`textColor3`}
              font={`font-semibold`}
            >
              Don&apos;t have an account?{" "}
              <span className="text-primary cursor-pointer hover:text-accent">
                Sign Up
              </span>
            </Text>
          </div>
        </div>
        <div className="w-full sm:h-[15%] pt-[40px] sm:pt-4 tab:pt-0">
          <div className="w-max m-auto border-y border-gray-400 flex items-center gap-6 justify-center">
            <div className="flex items-center gap-1">
              <PiPhoneCall className="text-xl" />
              <Text color={`titleColor`} padding={`py-0`}>
                +880 1XXX XXXXXX
              </Text>
            </div>
            <div className="flex items-center gap-1">
              <BiEnvelope className="text-xl" />
              <Text color={`titleColor`} padding={`py-0`}>
                support@fintech.com
              </Text>
            </div>
          </div>
          <Text align={`text-center`}>2024 © FINTECH</Text>
        </div>
      </div>
      <div
        className="hidden sm:block w-[40%] min-h-screen tab:h-full bg-cover rounded-l-[20px] bg-center"
        style={{ backgroundImage: `url(${SideBg})` }}
      ></div>
    </div>
  );
}

export default LogIn;
