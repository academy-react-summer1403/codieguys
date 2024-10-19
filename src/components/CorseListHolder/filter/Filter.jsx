import filter from "../../../assets/filter/Path 1878.png";
import up from "../../../assets/btn/Path 1884.png";
import down from "../../../assets/btn/Path 1881.png";

const Filter = () => {
  return (
    <div className="relative w-[399px] h-[926px] rounded-[37px] shadow-2xl border-2 border-slate-400 bg-custom-gray">
      <div className="w-[109.87px] h-[31.69px] absolute   mt-[40px]">
        <img
          src={filter}
          className="w-[28.81px] h-[26.19px] absolute top-[8px] left-[220px] "
        />
        <h1 className="text-[25px] text-slate-600 absolute left-[140px]">
          فیلترها
        </h1>
      </div>

      <div className="w-[337px] border-b-4 border-lightGreen absolute top-[150px] left-[30px]">
        <h2 className="text-[25px] text-slate-600 absolute -top-[50px] left-[220px]">
          تکنولوژی
        </h2>
        <img src={down} className="absolute -top-[30px] left-[10px]" />
      </div>

      

    </div>
  );
};

export { Filter };
