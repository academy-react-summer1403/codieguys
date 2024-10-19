import NewPasswordHolder from "../../components/AuthLayout/password/NewPasswordHolder";
import LoginStep1 from "../../screens/Login/LoginStep1";
import LoginStep2 from "../../screens/Login/LoginStep2";
import RegisterStep1 from "../../screens/Register/RegisterStep1";
import RegisterStep2 from "../../screens/Register/RegisterStep2";
import RegisterStep3 from "../../screens/Register/RegisterStep3";
import ForgetPassword from './../../screens/PassWord/ForgetPassword/index';


const authRoutes = [
  { path: "/LoginStep1", element: <LoginStep1 /> },
  { path: "/LoginStep2", element: <LoginStep2 /> },
  { path: "/RegisterStep1", element: <RegisterStep1 /> },
  { path: "/RegisterStep2", element: <RegisterStep2 /> },
  { path: "/RegisterStep3", element: <RegisterStep3 /> },
  { path: "/resetpassword", element: <ForgetPassword /> },
  { path: "/NewPassword", element: <NewPasswordHolder /> },


];

export default authRoutes;
