import Layout from "../../Layout";
import registerVerify from "../../../../assets/register/registerVerfy.png";
import RegisterFormStep2 from "./RegisterFormStep2";
const RegisterHolderStep2 = () => {
  return <Layout picSrc={registerVerify} pageForm={<RegisterFormStep2 />} />;
};

export default RegisterHolderStep2;