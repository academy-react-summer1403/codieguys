import { Field } from "formik";
const FormField = ({ placeholder, src }) => {
  return (
    <div className="w-[650px] h-[83px] bg-white rounded-2xl border-2 border-darkGreen mb-[21px] ">
      <Field
        placeholder={placeholder}
        className="text-xl font-normal leading-[24.2px] text-right w-[566px] h-[80px] bg-transparent inline focus:outline-none"
      ></Field>
      <img
        src={src}
        alt=""
        className="inline mr-[29.86px] ml-[23.68px] mb-[9px] "
      />
    </div>
  );
};
export default FormField;
