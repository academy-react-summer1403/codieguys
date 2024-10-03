import { twMerge } from "tailwind-merge";
const LongButtonGreen = (props) => {
  return (
    <button className=" mt-[21px] w-[636px] h-[83px] bg-darkGreen  text-white rounded-[10px] font-normal text-[25px] leading-[30.26px] text-center">
      {props.name} 
    </button>
  );
};
export default LongButtonGreen
