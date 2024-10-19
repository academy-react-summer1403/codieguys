import { GridList } from "../GridHolder/GridList";
import { Left } from "../../common/Left";
import { Right } from "../../common/Right";

const GridHolder = () => {
  return (
    <div className=" justify-center items-center w-full h-[1233px] border-2 border-slate-300 ">
      <GridList />
      {/* <Right />
      <Left /> */}
    </div>
  );
};

export { GridHolder };
