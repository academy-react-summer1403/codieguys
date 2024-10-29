import Pic from "../common/Pic"
import homeLogo from "../../assets/login/home.png"
const Layout = ({picSrc ,  pageForm}) => {
return (
    <>
    <div className=" flex mt-[112px] mx-auto w-[1539px] h-[857px] bg-custom-gray drop-shadow-[10px_10px_5px_rgba(0,0,0,0.16)] rounded-[20px]">

      <div className="mr-7">
        <div className="w-8 h-8 mt-9  ">
          <img src={homeLogo} alt="" />
        </div>
        {pageForm}
      </div>
      <Pic pic={picSrc} />
    </div>
  </>
)
}
export default Layout