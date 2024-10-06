import { Formik, Form } from "formik";
import FormField from "../../../common/FormField";
import LongButtonGreen from "../../../common/Buttons/LongButtonGreen";
import LongButtonWhite from "../../../common/Buttons/LongButtonWhite";
import finger from "../../../../assets/login/Path 2121.png";
const RegisterFormStep2 = () => {
  return (
    <>
      <div className="w-[773px] h-[750px] inline-block  ">
        <h5 className="font-normal leading-[48.41px] text-[40px] text-right mr-[65px] ">
          ثبت نام{" "}
        </h5>
        <Formik>
          <Form className="ml-[72px] mt-[79px]">
            <div className="mb-[101px]">
              <FormField placeholder="کد تایید " src={finger} />
            </div>

            <LongButtonGreen name="تایید" />
            <LongButtonWhite name="بازگشت به صفحه اصلی" />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default RegisterFormStep2;
