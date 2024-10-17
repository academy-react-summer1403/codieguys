import "./App.css";
import RegisterStep3 from "../screens/Register/RegisterStep3/index.jsx";
import ForgetPassword from "../screens/PassWord/ForgetPassword/index.jsx";
import NewPassword from "../screens/PassWord/NewPassword/index.jsx";
import LoginStep1 from "./../screens/Login/LoginStep1/index";
import LoginStep2 from "../screens/Login/LoginStep2/index.jsx";
import { RouterProvider } from "react-router-dom";
import router from "../config/router/routes.jsx";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
