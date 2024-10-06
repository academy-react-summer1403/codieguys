import emailIcon from "../../../../assets/register/a.png"
import { Formik, Form } from "formik";
import FormField from "../../../common/FormField";
import LongButtonGreen from "../../../common/Buttons/LongButtonGreen";
import LongButtonWhite from "../../../common/Buttons/LongButtonWhite";

const ForgetPasswordForm = () => {
  return (
    <div className="w-[773px] h-[750px] inline-block  ">
      <h5 className="font-normal leading-[48.41px] text-[40px] text-right mr-[65px] ">
        ورود به سیستم
      </h5>
      <Formik>
        <Form className="ml-[72px] mt-[79px]">
          <div className="mb-[101px]">
            <FormField placeholder="ایمیل خود را وارد کنید" src={emailIcon} />
          </div>

          <LongButtonGreen name="ادامه" />
          <LongButtonWhite name="بازگشت به صفحه قبلی" />
        </Form>
      </Formik>
    </div>
  );
};
export default ForgetPasswordForm;
