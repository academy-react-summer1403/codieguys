import LoginForm from "./LoginForm";
import verify from "../../assets/login/verfy.png";
import homeLogo from "../../assets/login/Path 1902.png";
import LoginFormStep2 from "./LoginFormStep2";
import LoginPicStep2 from "./LoginPicStep2";
import LoginPic from "./LoginPic";
const LoginHolder = () => {
  return (
    <>
      <div className=" flex mt-[112px] mx-auto w-[1539px] h-[857px] bg-custom-gray drop-shadow-[10px_10px_5px_rgba(0,0,0,0.16)] rounded-[20px]">
        <LoginPicStep2 />
        <div>
          <div className="w-8 h-8 mt-9 ml-9">
            
            <img src={homeLogo} alt="" />
          </div>
          <LoginFormStep2 />
        </div>
      </div>
    </>
  );
};
export default LoginHolder;
