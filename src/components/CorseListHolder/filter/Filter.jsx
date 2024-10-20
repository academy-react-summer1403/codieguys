import filter from "../../../assets/filter/Path 1878.png";
import up from "../../../assets/btn/Path 1884.png";
import down from "../../../assets/btn/Path 1881.png";

const Filter = () => {
  return (
    <div className="w-[350px] h-[935px] shadow-2xl rounded-[37px] bg-custom-gray">
      <div className="flex justify-center gap-2 my-12">
        <img src={filter} className="w-[28.81px] h-[26.19px]" />
        <h1 className="text-2xl">فیلترها</h1>
      </div>
      <div className="mx-8 ">
        <div className="flex justify-between items-center py-4 border-b-2 border-lightGreen ">
          <h2 className="text-xl">تکنولوژی</h2>
          <img src={down} className="" />
        </div>
        <div className="flex justify-between items-center py-4 border-b-2 border-lightGreen ">
          <h2 className="text-xl">نوع برگزاری</h2>
          <img src={down} className="" />
        </div>
        <div className="flex justify-between items-center py-4 border-b-2 border-lightGreen ">
          <h2 className="text-xl">سطح دوره</h2>
          <img src={down} className="" />
        </div>
        <div className="flex justify-between items-center py-4 border-b-2 border-lightGreen ">
          <h2 className="text-xl">قیمت</h2>
          <img src={down} className="" />
        </div>
      </div>
    </div>
  );
};

export { Filter };
