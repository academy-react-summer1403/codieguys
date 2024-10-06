import key from "../../../../assets/register/key (2).png"
import checkpass from "../../../../assets/register/checkpass.png"


import { Formik, Form } from "formik";
import FormField from "../../../common/FormField";
import LongButtonGreen from "../../../common/Buttons/LongButtonGreen";
import LongButtonWhite from "../../../common/Buttons/LongButtonWhite";

const NewPasswordForm = () => {
  return (
    <div className="w-[773px] h-[750px] inline-block  ">
      <h5 className="font-normal leading-[48.41px] text-[40px] text-right mr-[65px] mt-32 ">
تغییر رمز      </h5>
      <Formik>
        <Form className="ml-[72px] mt-[79px]">
          <div className="mb-[18px]">
            <FormField placeholder="تغییر رمز " src={key} />
          </div>
          <div className="mb-[101px]">
            <FormField placeholder="تکرار رمز عبور " src={checkpass} />
          </div>

          <LongButtonGreen name="تایید" />
      
        </Form>
      </Formik>
    </div>
  );
};
export default NewPasswordForm;
