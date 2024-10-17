import { Formik, Form, Field, ErrorMessage } from "formik";
import mobileIcon from "../../../../assets/login/Path 1905.png";
import keyIcon from "../../../../assets/login/Path 1906.png";
import LongButtonGreen from "../../../common/Buttons/LongButtonGreen";
import LongButtonWhite from "../../../common/Buttons/LongButtonWhite";
import FormField from "../../../common/FormField";
import { loginAPI } from "../../../../core/services/api/Auth/login";
import { useEffect } from "react";
import { getProfile } from "./../../../../core/services/api/user";
import { setItem } from "../../../../core/services/common/storage.sevices";

const LoginForm = () => {
  const handelSubmit = async (value) => {
    const user = await loginAPI(value);
    //console.log(user);
    setItem("token", user.token);
  };
  const getProfileFunc = async () => {
    const user = await getProfile();
    console.log(user);
  };

  useEffect(() => {
    getProfileFunc();
  }, []);

  return (
    <div className="w-[773px] h-[750px] inline-block  ">
      <h5 className="font-normal leading-[48.41px] text-[40px] text-right mr-[65px] ">
        ورود به سیستم
      </h5>
      <Formik
        initialValues={{
          phoneOrGmail: "",

          password: "",
          rememberMe: false,
        }}
        onSubmit={handelSubmit}
      >
        <Form className="ml-[72px] mt-[79px]">
          <FormField
            placeholder="شماره همراه"
            src={mobileIcon}
            name={"phoneOrGmail"}
          />
          <FormField placeholder="رمز عبور" src={keyIcon} name={"password"} />
          <label className="text-xl font-normal leading-6 ml-[470px] mt-2">
            مرا به خاطر بسپار
            <Field
              type="checkbox"
              name="rememberMe"
              className="w-[28px] h-[28px] border-darkGreen border-2 ml-2 mb-[22px]"
            ></Field>
          </label>
          <LongButtonGreen name="تایید" />
          <LongButtonWhite name="بازگشت به صفحه اصلی" />
        </Form>
      </Formik>
      <span className="underline font-normal text-xl text-right text-[#22445D] ml-[300px]">
        یک_حساب_کاربری_ایجاد_کنید
      </span>
      <span className="underline font-normal text-xl text-right text-[#22445D] ml-[72px]">
        فراموشی_رمز
      </span>
    </div>
  );
};
export default LoginForm;
