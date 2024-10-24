import Layout from "../../Layout";
import registerVerify from "../../../../assets/register/Layer 2.png";
import RegisterFormStep3 from "./RegisterFormStep3";
const RegisterHolderStep3 = () => {
  return <Layout picSrc={registerVerify} pageForm={<RegisterFormStep3 />} />;
};

export default RegisterHolderStep3;