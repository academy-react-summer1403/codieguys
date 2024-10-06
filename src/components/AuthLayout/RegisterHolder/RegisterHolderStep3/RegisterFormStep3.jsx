import { Formik, Form, Field } from "formik";
import FormField from "../../../common/FormField";
import LongButtonGreen from "../../../common/Buttons/LongButtonGreen";
import mobileIcon from "../../../../assets/register/mobile.png";
import emailIcon from "../../../../assets/register/a.png";
import key from "../../../../assets/register/key (2).png";
import passCheck from "../../../../assets/register/checkpass.png";

const RegisterFormStep3 = () => {
  return (
    <>
      <div className="w-[773px] h-[750px] inline-block  ">
        <h5 className="font-normal leading-[48.41px] text-[40px] text-right mr-[65px] ">
          ثبت نام{" "}
        </h5>
        <Formik>
          <Form className="ml-[72px] mt-[79px]">
            <div className="mb-[18px]">
              <FormField placeholder="شماره همراه  " src={mobileIcon} />
            </div>
            <div className="mb-[18px]">
              <FormField placeholder="ایمیل کاربر " src={emailIcon} />
            </div>
            <div className="mb-[18px]">
              <FormField placeholder=" رمز عبور  " src={key} />
            </div>
            <div className="mb-[18px]">
              <FormField placeholder="تکرار رمز عبور " src={passCheck} />
            </div>
            <label className="text-xl font-normal leading-6 ml-[380px] mt-2">
              من_با_تمام_اظهارات_موافقم
              <Field
                type="checkbox"
                name="check"
                value="rememberMe"
                className="w-[28px] h-[28px] border-darkGreen border-2 ml-2 mb-[22px]"
              ></Field>
            </label>
            <LongButtonGreen name="ادامه" />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default RegisterFormStep3;
