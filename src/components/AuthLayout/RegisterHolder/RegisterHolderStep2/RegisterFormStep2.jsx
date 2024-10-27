import { Formik, Form } from "formik";
import FormField from "../../../common/FormField";
import LongButtonGreen from "../../../common/Buttons/LongButtonGreen";
import LongButtonWhite from "../../../common/Buttons/LongButtonWhite";
import finger from "../../../../assets/login/id.png";
import { verifyMessageAPI } from "../../../../core/services/api/Auth/register";
import { useNavigate } from "react-router-dom";
import usePhoneStore from "../../../../store/user.store";

const RegisterFormStep2 = () => {
  const navigate = useNavigate();
  const { phoneNumber } = usePhoneStore();

  const handelSubmit = async (value) => {
    console.log(phoneNumber, " in second form");

    const result = await verifyMessageAPI(value);
    console.log("here! " + result + " to here! ");
    if (result.success) {
      navigate("/RegisterStep3");
    }
  };
  return (
    <>
      <div className="w-[773px] h-[750px] inline-block  ">
        <h5 className="font-normal leading-[48.41px] text-[40px] text-right mr-[65px] ">
          ثبت نام
        </h5>
        <Formik
          initialValues={{
            phoneNumber: phoneNumber,
            verifyCode: "",
          }}
          onSubmit={handelSubmit}
        >
          <Form className="ml-[72px] mt-[79px]">
            <div className="mb-[101px]">
              <FormField
                name={"verifyCode"}
                placeholder="کد تایید "
                src={finger}
              />
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
