import { Formik, Form, Field, ErrorMessage } from "formik";
import mobileIcon from "../../assets/login/Path 1905.png";
import keyIcon from "../../assets/login/key.png";
import LongButtonGreen from "../common/Buttons/LongButtonGreen";
import LongButtonWhite from "../common/Buttons/LongButtonWhite";


const LoginForm = () => {
  return (
    <div className="w-[773px] h-[750px] inline-block  ">
      <h5 className="font-normal leading-[48.41px] text-[40px] text-right mr-[65px] ">
        ورود به سیستم
      </h5>
      <Formik>
        <Form className="ml-[72px] mt-[79px]">
          <div className="w-[650px] h-[83px] bg-white rounded-2xl border-2 border-darkGreen mb-[21px] ">
            <Field
              placeholder="شماره همراه"
              className="text-xl font-normal leading-[24.2px] text-right w-[566px] h-[80px] bg-transparent inline focus:outline-none"
            ></Field>
            <img
              src={mobileIcon}
              alt=""
              className="inline mr-[29.86px] ml-[23.68px] mb-[9px] "
            />
          </div>
          <div className="w-[650px] h-[83px] bg-white rounded-2xl border-2 border-darkGreen mb-[21px] ">
            <Field
              placeholder="رمز عبور"
              className="text-xl font-normal leading-[24.2px] text-right w-[566px] h-[80px] bg-transparent inline focus:outline-none"
            ></Field>
            <img
              src={keyIcon}
              alt=""
              className="inline mr-[26.05px] ml-[18.35px] mb-[9px] "
            />
          </div>
          <label className="text-xl font-normal leading-6 ml-[470px] mt-2">
            مرا به خاطر بسپار
            <Field
              type="checkbox"
              name="check"
              value="rememberMe"
              className="w-[28px] h-[28px] border-darkGreen border-2 ml-2 mb-[22px]"
            ></Field>
          </label>
          <LongButtonGreen name = "تایید" />
          <LongButtonWhite name = "بازگشت به صفحه اصلی" />
        </Form>
      </Formik>
     <span className="underline font-normal text-xl text-right text-[#22445D] ml-[300px]">یک_حساب_کاربری_ایجاد_کنید</span>
     <span  className="underline font-normal text-xl text-right text-[#22445D] ml-[72px]">فراموشی_رمز</span>
    </div>
  );
};
export default LoginForm;
