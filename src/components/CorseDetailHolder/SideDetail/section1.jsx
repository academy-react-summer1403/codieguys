const Section1 = () => {

    return(
        <div className="w-full h-full bg-white rounded-3xl p-4  ">
        <div className="w-full flex justify-between">
          <span className="text-darkGreen">مدرس دوره : </span>
          <span> نام استاد </span>
        </div>
        <div className="w-full flex justify-between">
          <span className="text-darkGreen"> هزینه تمام دوره : </span>
          <span className="text-red-600"> 3.000.000</span>
        </div>
        <div className="w-full flex justify-between">
          <span className="text-darkGreen"> تکنولوژی دوره : </span>
          <span>تکنولوژی دوره </span>
        </div>
        <div className="w-full flex justify-between">
          <span className="text-darkGreen"> سطح دوره : </span>
          <span>پیشرفته</span>
        </div>
        <div className="w-full flex justify-between">
          <span className="text-darkGreen">ظرفیت دوره </span>
          <span>50نفر </span>
        </div>
        <div className="w-full flex justify-between">
          <span className="text-darkGreen"> وضعیت دوره : </span>
          <span>شروع ثبت نام </span>
        </div>
      </div>
    )
}
export default Section1