import logo from "../../../assets/TopLogo/icons8-angular.png";
import Pic from "../../../assets/Card/Front-End-developer-profile-picture.png";
import star from "../../../assets/Card/Path 1885.png";
import emptyStar from "../../../assets/Card/Group 221.png";
import dislike from "../../../assets/Card/Group 222.png";
import like from "../../../assets/Card/Group 223.png";
import wo from "../../../assets/Card/woo.png";

const CardWithTopLogo1 = () => {
  return (
    <div className="flex flex-col  w-full  justify-start bg-custom-gray border-2 rounded-[34px] shadow-2xl">
      <div className="w-full flex flex-col justify-center">
        <img src={wo} className="rounded-t-[34px]" />
      </div>
      <div className="px-5 py-6">
        <div className="  flex flex-col">
          <div className="flex justify-between  items-center ">
            <a className=" rounded-[14px] flex flex-row text-green-800 bg-lightGreen px-4 py-2   text-nowrap ">
              وضعیت دوره
            </a>
            <div className="flex flex-row gap-2 ">
              <img src={emptyStar} className=" w-[23px] h-[24px] " />
              <img src={dislike} className=" w-[23px] h-[24px] " />
              <img src={like} className=" w-[23px] h-[24px] " />
            </div>
          </div>
          <h className="flex flex-row flex-wrap py-2 text-3xl text-wrap text-right font-meduim ">
            آشنایی با برنامه نویسی با وردپرس
          </h>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex  gap-2">
            <img src={Pic} className=" w-[33px] h-[33px]  border-1 " />
            <p className="text-gray-400 ">جان اسمیت</p>
          </div>

          <div className="flex">
            <a className="text-darkGreen text-xl">4.8</a>
            <img src={star} className="w-5 h-6" />
          </div>
        </div>

        <div className="text-darkGreen text-sm py-2 justify-between">
          <p2 className="">50</p2>
          <p1 className=""> سخنرانی ( 190 ساعت )</p1>
        </div>

        <div className="text-wrap truncate mb-4 text-gray-400 text-xl">
          ورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
          دهندگان وب، تایپوگراف ها و طراحان استفاده می شود
        </div>

        <div className="flex justify-between items-center border-t-2 border-darkGreen ">
          <h2 className="text-2xl text-darkGreen">:هزینه تمام دوره</h2>

          <h3 className="text-2xl text-red-600">تومان 3.000.000</h3>
        </div>

        <div className="flex justify-center items-center mt-4">
          <button className="px-16 py-3 rounded-[10px] bg-lightGreen text-slate-100">
            الان ثبت نام کن
          </button>
        </div>
      </div>
    </div>
  );
};

export { CardWithTopLogo1 };
