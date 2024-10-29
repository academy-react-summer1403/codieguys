import { useState } from "react";
import star from "/src/assets/corseDetail/star.png";
import FillStar from "/src/assets/corseDetail/FillStar.png";
import like from "/src/assets/corseDetail/like.png";
import dislike from "/src/assets/corseDetail/dislike.png";
const AboutCorse = () => {
  const likeNum = 50;
  const dislikeNum = 6;
  const [isFilled, setIsFilled] = useState(false);
  const handelStarClick = () => {
    setIsFilled(!isFilled);
  };
  const handelLikeClick = () => {};
  const handelDislikeClick = () => {};
  return (
    <div className="w-full h-full bg-white rounded-3xl p-6">
      <div className="flex justify-between ">
        <span className="text-5xl font-normal ">عنوان دوره </span>
        <div className="flex gap-3 p-4">
          <div>
            <img
              onClick={handelStarClick}
              src={isFilled ? FillStar : star}
              alt=""
            />
          </div>
          <div>
            <img onClick={handelDislikeClick} src={dislike} alt="" />
            <div>{dislikeNum}</div>
          </div>
          <div>
            <img onClick={handelLikeClick} src={like} alt="" />
            <div>{likeNum}</div>
          </div>
          
        </div>
      </div>
      <div className="w-full , h-full text-wrap text-3xl text-slate-600 space-">
      لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه است. لورم ایپسوم فقط برای توسعه دهندگان وب نیست. 
      طراحان گرافیک نیز از آن با نرم افزارهای مختلفی مانند فوتوشاپ استفاده می کنند. لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن نشان می دهد 
      که یک پروژه در حال توسعه است. لورم ایپسوم فقط برای توسعه دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی مانند فوتوشاپ استفاده می کنند.

لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه است. لورم ایپسوم فقط برای توسعه دهندگان وب نیست. طراحان 
گرافیک نیز از آن با نرم افزارهای مختلفی مانند فوتوشاپ استفاده می کنند.
      </div>
    </div>
  );
};
export default AboutCorse;
