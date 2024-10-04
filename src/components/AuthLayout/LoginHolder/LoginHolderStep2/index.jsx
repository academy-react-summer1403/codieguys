import sign from "../../../assets/login/sign.png";
import Pic from "../../common/Pic";
import LoginFormStep2 from "./LoginFormStep2";
import homeLogo from "../../../assets/login/Path 1902.png";

const LoginHolderStep2 = () => {
  return (
    <>
      <div className=" flex mt-[112px] mx-auto w-[1539px] h-[857px] bg-custom-gray drop-shadow-[10px_10px_5px_rgba(0,0,0,0.16)] rounded-[20px]">
        <Pic pic={sign} />
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
export default LoginHolderStep2;
