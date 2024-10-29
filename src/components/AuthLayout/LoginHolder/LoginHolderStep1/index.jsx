import verify from "../../../../assets/login/verfy.png";
import LoginForm from "./LoginForm";
import Layout from "../../Layout";

const LoginHolderStep1 = () => {
  return (
  <Layout picSrc={verify} pageForm={<LoginForm />} />
  );
};
export default LoginHolderStep1;
