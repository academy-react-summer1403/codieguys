import Layout from "../../Layout";
import register from "../../../../assets/register/register.png";
import RegisterForm from "./registerFormHolder";
const RegisterHolderStep1 = () => {
  return <Layout picSrc={register} pageForm={<RegisterForm />} />;
};

export default RegisterHolderStep1;
