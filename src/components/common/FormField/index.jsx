import { Field } from "formik";
const FormField = ({ placeholder, src , name  }) => {
  return (
    <div className="h-[83px] bg-white rounded-2xl border-2 border-darkGreen mb-[21px] flex items-center gap-3 px-8 py-4 ">
      <Field
        placeholder={placeholder} name={name}
        className="text-xl font-normal leading-[24.2px] text-right w-[566px] h-[80px] bg-transparent inline focus:outline-none"
      ></Field>
      <img
        src={src}
        alt=""
        className="inline  "
      />
    </div>
  );
};
export default FormField;
