import menu from "../../../assets/HeaderList/Path 1876.png";
import list from "../../../assets/HeaderList/Path 1875.png";
import point from "../../../assets/HeaderList/Path 1877.png";
import search from "../../../assets/HeaderList/Path 1874.png";

const HeaderList = ({ setSearch }) => {
  return (
    // <div className="flex flex-row-reverse w-[1789px] h-[157px] rounded-[37px] bg-custom-gray border-2 shadow-2xl mx-auto my-10">
    //   <div className="w-[170px] h-[86px] rounded-[43px] border-[1px] border-darkGreen my-auto pt-6 mr-4 ">
    //     <img src={menu} className=" w-[31.61] h-[31.61] ml-[110px]" />
    //     <img src={list} className="w-[31.61] h-[31.61] ml-[30px] mt-[-33px]" />
    //   </div>

    //   <div className="w-[296px] h-[86px] my-auto border-[1px] mr-4 border-darkGreen rounded-[43px]">
    //     <p className="text-darkGreen text-2xl  my-auto pt-6 ml-[150px]">
    //       مرتب سازی
    //     </p>
    //     <img
    //       src={point}
    //       className="w-[22.1px] h-[11.06px] my-auto ml-[60px] mt-[-15px] "
    //     />
    //   </div>

    //   {/* <div className="w-[571px] h-[86px] border-[1px] my-auto mr-[650px] bg-white border-darkGreen rounded-[43px]">
    //     <input
    //       onChange={(e) => setSearch(e.target.value)}
    //       className=" rounded-[43px] ml-[250px] text-right text-xl p-6 block outline-none "
    //       type="search"
    //       placeholder="جستجو..."
    //     />
    //     <div className="w-[110px] h-[86px] bg-lightGreen border-[1px] my-auto rounded-l-[43px] ml-[-3px] mt-[-78px]">
    //       <img src={search} className="w-[36.9px] h-[36.9px] ml-10 mt-6  " />
    //     </div>
    //   </div> */}
    //   <div className="rounded-full border border-darkGreen flex h-fit items-center justify-between overflow-hidden">
    //     <input
    //       type="text"
    //       placeholder="جستجو..."
    //       className="px-8 text-2xl bg-transparent py-8 min-w-[520px]"
    //     />
    //     <div className="min-h-[92px] flex items-center justify-center bg-lightGreen px-9">
    //       <img src={search} />
    //     </div>
    //   </div>
    // </div>

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
