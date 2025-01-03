import { Formik, Form } from "formik";
import FormField from "../../../common/FormField";
import LongButtonGreen from "../../../common/Buttons/LongButtonGreen";
import LongButtonWhite from "../../../common/Buttons/LongButtonWhite";
import mobileIcon from "../../../../assets/login/key.png";
import { sendVerifyMessageAPI } from "../../../../core/services/api/Auth/register";
import { useNavigate } from "react-router-dom";
import RegisterStep2 from "./../../../../screens/Register/RegisterStep2/index";
import { useEffect } from "react";
import usePhoneStore from "../../../../store/user.store";
import toast from "react-hot-toast";
const RegisterForm = () => {
  const { setPhoneNumber } = usePhoneStore();

  const navigate = useNavigate();
  const handelSubmit = async (value) => {
    const result = await sendVerifyMessageAPI(value);
    console.log("this is result in form : ", result);
    if (result.success) {
      toast.success(result.message);
      setPhoneNumber(value.phoneNumber);
      navigate("/RegisterStep2");
    }
  };

  return (
    <>
      <div className="w-[773px] h-[750px] inline-block  ">
        <h5 className="font-normal leading-[48.41px] text-[40px] text-right mr-[65px] ">
          ثبت نام{" "}
        </h5>
        <Formik
          initialValues={{
            phoneNumber: "",
          }}
          onSubmit={handelSubmit}
        >
          <Form className="ml-[72px] mt-[79px]">
            <div className="mb-[101px]">
              <FormField
                name={"phoneNumber"}
                placeholder="شمماره همراه"
                src={mobileIcon}
              />
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
