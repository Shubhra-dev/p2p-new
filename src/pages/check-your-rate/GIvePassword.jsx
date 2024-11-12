import { useState } from "react";
import SubHeading from "../../components/SubHeading";
import SubTitle from "../../components/SubTitle";
import Gift from "../../icon/Gift";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import Text from "../../components/Text";

import { FaLessThan } from "react-icons/fa6";
import PrimaryButton from "../../components/PrimaryButton";
import { loginRequest } from "../../services/Authentication";
import { useDispatch } from "react-redux";
import { logIn } from "../../features/authentication/authSlice";
function GivePassword({ setPage, data, setData }) {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [floatingNote, setFloatingNote] = useState({ state: false, msg: "" });
  const [see, setSee] = useState(false);

  const handleLogin = async () => {
    console.log(password);
    try {
      const response = await loginRequest(data.phone.phoneNumber, password);

      if (response && response.success) {
        // Dispatch the logIn action with the user data
        setData((prevState) => ({
          ...prevState,
          personalDetail: {
            ...prevState.personalDetail,
            firstName: response.result.client.first_name,
            lastName: response.result.client.last_name,
            dob: response.result.client.date_of_birth,
          },
        }));
        dispatch(logIn(response.result.token));
        setPage(4);
      } else {
        setFloatingNote({
          state: true,
          msg: response.message || "Login failed.",
        });
      }
    } catch (err) {
      setFloatingNote({
        state: true,
        msg: "Incorrect Password.",
      });
      console.error("Error:", err);
    }
  };

  return (
    <>
      <div className="w-max m-auto">
        <Gift color={"#0d5152"} size={"60"} />
      </div>
      <SubTitle font={`font-normal`} align={`text-center`} color={`titleColor`}>
        Looking like you already have an account!
      </SubTitle>
      <SubHeading align={`text-center`} padding={`pt-1 pb-4`}>
        Insert your password
        <span className="text-primary"> for your account</span>
      </SubHeading>
      <div className="mt-4 mb-3 w-full border pr-2 border-gray-400 flex items-center gap-2">
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

      {floatingNote.state && (
        <div className="bg-red-200 p-2 mt-2 rounded-md">
          <Text>{floatingNote.msg}</Text>
        </div>
      )}
      <div className="flex gap-2 items-center justify-between pt-4">
        <div
          className="border border-primary p-2 rounded-md"
          onClick={() => setPage(2)}
        >
          <FaLessThan className="text-primary" />
        </div>
        <div className="w-full" onClick={handleLogin}>
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

export default GivePassword;