import DashboardLayout from "../user-dashboard/DashboardLayout";
import Heading2 from "../../components/Heading2";
import { useEffect, useState } from "react";
import ToggleButton from "./ToggleButton";
import SubHeading from "../../components/SubHeading";
import PrimaryButton from "../../components/PrimaryButton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "../../services/passwordChange";
import Text from "../../components/Text";

function Settings() {
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate("/auth/login");
    }
  }, [user.isLoggedIn, navigate]);
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [isEmailNotificationEnabled, setIsEmailNotificationEnabled] =
    useState(false);
  const [isSMSNotificationEnabled, setIsSMSNotificationEnabled] =
    useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [message, setMessage] = useState(null);
  const showMessage = (type, text) => {
    setMessage({ type: type, text: text });
    setTimeout(() => {
      setMessage(null);
    }, 3000); // Message will disappear after 3 seconds
  };
  async function handlePasswordChange() {
    try {
      const result = await updatePassword(user.userToken, {
        old_password: oldPassword,
        password: newPassword,
        password_confirmation: confirmNewPassword,
      });
      console.log(result);
      showMessage("success", result.message);
      setOldPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
    } catch (err) {
      showMessage("failed", err.message);
    }
  }

  return (
    <DashboardLayout active={`settings`}>
      <div className="bg-white rounded-md px-4 tab:px-8 py-6 w-full">
        <Heading2 font={`font-bold font-poppins`}>Account Settings</Heading2>
        <div className="mt-3">
          <ToggleButton
            label="Two-Factor-Authentication"
            description="Add an extra layer of security to your account"
            enabled={is2FAEnabled}
            onToggle={() => setIs2FAEnabled(!is2FAEnabled)}
          />
          <ToggleButton
            label="Email Notification"
            description="Receive email updates about your account activity"
            enabled={isEmailNotificationEnabled}
            onToggle={() =>
              setIsEmailNotificationEnabled(!isEmailNotificationEnabled)
            }
          />
          <ToggleButton
            label="SMS Notification"
            description="Receive SMS updates about your account activity"
            enabled={isSMSNotificationEnabled}
            onToggle={() =>
              setIsSMSNotificationEnabled(!isSMSNotificationEnabled)
            }
          />
        </div>
        <div className="mt-3">
          <SubHeading color="textColor4" padding={`py-0`} font={`semibold`}>
            Change Password
          </SubHeading>
          <div className="border border-textColor3 rounded-md my-2.5">
            <input
              type="password"
              name="current"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Current Password"
              className="w-full p-2 text-textColor4 rounded-md"
            />
          </div>
          <div className="border border-textColor3 rounded-md">
            <input
              type="password"
              name="new"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
              className="w-full p-2 text-textColor4 rounded-md"
            />
          </div>
          <div className="border border-textColor3 rounded-md my-2.5">
            <input
              type="password"
              name="confirm"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              placeholder="Confirm New Password"
              className="w-full p-2 text-textColor4 rounded-md"
            />
          </div>
          {message && (
            <div
              className={`w-full ${
                message.type === "success" ? "bg-green-500" : "bg-red-500"
              } text-white px-6 py-3 rounded-md`}
            >
              <Text font={`font-semibold`} align={`text-center`}>
                {message.text}
              </Text>
            </div>
          )}
          <div className="pt-2" onClick={handlePasswordChange}>
            <PrimaryButton noIcon={true} bg={`accent`} padding={`py-3 px-10`}>
              update password
            </PrimaryButton>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Settings;
