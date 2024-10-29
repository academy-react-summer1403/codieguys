import Layout from "../../Layout";
import newPass from "../../../../assets/pass/newPass (1).png";
import NewPasswordForm from "./NewPasswordForm";
import { useParams } from "react-router-dom";

const NewPasswordHolder = () => {

    const {ConfigValue} = useParams()
  return (
    <>
      <Layout picSrc={newPass} pageForm={<NewPasswordForm />} />
      <p>config value :  {ConfigValue}</p>
    </>
  );
};

export default NewPasswordHolder;
