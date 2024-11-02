import AboutCorse from "../aboutCorse";
import AboutTeacher from "../aboutTeacher";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";

const SideDetail = () => {
  return (
    <div className="w-full h-full pr-5 rounded-3xl bg-black flex flex-col gap-6 p-6 col-start-8 col-span-3  row-start-1 row-end-3">
      <Section1 />
      <Section2 />
      <Section3 />

      <button className="w-full rounded-3xl px-14 py-2 bg-magic-mint center">
        رزرو دوره
      </button>
      <AboutTeacher />
    </div>
  );
};

export default SideDetail;
