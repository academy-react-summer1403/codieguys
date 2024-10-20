import Layout from "../../Layout"
import forgetpass from "../../../../assets/pass/forgot.png"
import ForgetPasswordForm from "./ForgetPasswordForm"

const ForgetPasswordHolder = () => {
    return <Layout picSrc={forgetpass} pageForm={<ForgetPasswordForm/>} /> 
}

export default ForgetPasswordHolder