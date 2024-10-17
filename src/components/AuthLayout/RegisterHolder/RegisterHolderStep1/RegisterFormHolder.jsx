import { Formik , Form } from "formik";
import FormField from "../../../common/FormField";
import LongButtonGreen from "../../../common/Buttons/LongButtonGreen";
import LongButtonWhite from "../../../common/Buttons/LongButtonWhite";
import mobileIcon from "../../../../assets/login/Path 1905.png"
const RegisterForm = () => {
  const handelSubmit = async (value) => {
    console.log(value);
  }
  return (
    <>
      <div className="w-[773px] h-[750px] inline-block  ">
        <h5 className="font-normal leading-[48.41px] text-[40px] text-right mr-[65px] ">
ثبت نام         </h5>
        <Formik
        initialValues={{
          phoneNumber : ""
        }}>
          <Form className="ml-[72px] mt-[79px]">
            <div className="mb-[101px]">
              <FormField name={"phoneNumber"} placeholder="شمماره همراه" src={mobileIcon} />
            </div>

            <LongButtonGreen name="تایید" />
            <LongButtonWhite name="بازگشت به صفحه اصلی" />
          </Form>
        </Formik>
        <span className="underline font-normal text-xl text-right text-[#22445D] ml-[500px]">
        من_از_قبل_عضو_هستم
      </span>
      </div>
    </>
  );
};
export default RegisterForm;
