import verify from "../../../assets/login/verfy.png";
import Pic from "../../common/Pic";
import LoginForm from "./LoginForm";
import homeLogo from "../../../assets/login/Path 1902.png"

const LoginHolderStep1 = () => {
  return (
    <>
      <div className=" flex mt-[112px] mx-auto w-[1539px] h-[857px] bg-custom-gray drop-shadow-[10px_10px_5px_rgba(0,0,0,0.16)] rounded-[20px]">
        <Pic pic={verify} />
        <div>
          <div className="w-8 h-8 mt-9 ml-9">
            <img src={homeLogo} alt="" />
          </div>
          <LoginForm />
        </div>
      </div>
    </>
  );
};
export default LoginHolderStep1;
