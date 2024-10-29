import AboutCorse from "./aboutCorse";
import CorseVideo from "./corseVideo";
import SideDetail from "./SideDetail/index";
import corsePic from "/src/assets/corseDetail/corsePic.png"
const CorseDetailHolder = () => {
  return (
    <div className="grid grid-cols-10 grid-rows-5 gap-5 px-28">
      <div className="row-span-5 col-span-7 bg-black flex flex-col gap-6 p-6 rounded-3xl">
        <div>
          <img src={corsePic} alt="" />
        </div>
        <AboutCorse />
        <CorseVideo />
      </div>
      <SideDetail />
    </div>
  );
};
export default CorseDetailHolder;
