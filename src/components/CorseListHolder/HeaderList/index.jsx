import menu from "../../../assets/HeaderList/Path 1876.png";
import list from "../../../assets/HeaderList/Path 1875.png";
import point from "../../../assets/HeaderList/Path 1877.png";
import search from "../../../assets/HeaderList/Path 1874.png";

const HeaderList = ({ setSearch }) => {
  return (
    <div className="w-full py-9 px-16 flex bg-custom-gray shadow-2xl rounded-[37px] shadow-black/20 justify-between items-center">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-9 rounded-full border border-darkGreen p-7">
          <img src={menu} />
          <img src={list} />
        </div>
        <div className="flex items-center gap-[90px] justify-between  rounded-full border border-darkGreen text-darkGreen p-7 text-2xl">
          مرتب سازی
          <img src={point} />
        </div>
      </div>

      <div className="rounded-full flex items-center justify-between border overflow-hidden border-darkGreen">
        <input
          type="text"
          placeholder="جستجو..."
          className="px-8 text-2xl bg-transparent  min-w-[520px]"
        />
        <div className=" flex items-center justify-center bg-lightGreen px-9 py-6">
          <img src={search} />
        </div>
      </div>
    </div>
  );
};

export { HeaderList };
