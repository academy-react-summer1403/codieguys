import Layout from "../../Layout"
import newPass from "../../../../assets/pass/newPass (1).png"
import NewPasswordForm from "./NewPasswordForm"


const  NewPasswordHolder = () => {
    return (
        <Layout picSrc={newPass} pageForm={<NewPasswordForm />} />
    )
 
}

export default NewPasswordHolder