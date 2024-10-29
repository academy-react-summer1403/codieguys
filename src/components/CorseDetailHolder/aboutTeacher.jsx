import userPrifilePic from "/src/assets/corseDetail/uersProfilePic.png";
const AboutTeacher = () => {
  return (
    <div className="bg-white rounded-3xl justify-center">
      <div className="text-center text-2xl">درباره ی استاد</div>
      <div className="flex  gap-5 justify-center ">
        <div className="rounded-full overflow-hidden">
           <img src={userPrifilePic} alt="" />
        </div>
        <div className="text-slate-400 text-3xl font-normal py-3">
          جان اسمیت
        </div>
      </div>
      <div className="text-slate-400 text-lg font-normal text-center">
          لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
          دهندگان وب، تایپوگراف ها و طراحان استفاده می شود{" "}
        </div>
    </div>
  );
};

export default AboutTeacher;
