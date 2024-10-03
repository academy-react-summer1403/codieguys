import { Formik, Form, Field, ErrorMessage } from "formik";
import finger from "../../assets/login/Path 2121.png"

import LongButtonGreen from "../common/Buttons/LongButtonGreen";
import LongButtonWhite from "../common/Buttons/LongButtonWhite";



const LoginFormStep2 = () => {
  return (
    <div className="w-[773px] h-[750px] inline-block  ">
      <h5 className="font-normal leading-[48.41px] text-[40px] text-right mr-[65px] ">
        ورود به سیستم
      </h5>
      <Formik>
        <Form className="ml-[72px] mt-[79px]">
          <div className="w-[650px] h-[83px] bg-white rounded-2xl border-2 border-darkGreen mb-[101px] ">
            <Field
              placeholder="کد تایید"
              className="text-xl font-normal leading-[24.2px] text-right w-[566px] h-[80px] bg-transparent inline focus:outline-none"
            ></Field>
            <img
              src={finger}
              alt=""
              className="inline mr-[29.86px] ml-[23.68px] mb-[9px] "
            />
          </div>
          
        
          <LongButtonGreen name = "ورود" />
          <LongButtonWhite name = "بازگشت به صفحه اصلی" />
        </Form>
      </Formik>
    
    </div>
  );
};
export default LoginFormStep2;
