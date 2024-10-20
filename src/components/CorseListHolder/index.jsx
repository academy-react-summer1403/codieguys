import { CardWithTopLogo } from "./CardWithTopLogo";
import { CardWithTopLogoHolder } from "./CardWithTopLogoHoder";
import { GridHolder } from "./GridHolder/GridHolder";
import { HeaderList } from "./HeaderList";
import { HeaderTitle } from "./HeaderTitle";
import { CardAndFilterHolder } from "./CardAndFilterHolder";
import { ButtonFooterTop } from "./ButtonFooterTop";


const CorseListHolder = () => {
  return (
    <div className="px-16">
      <HeaderTitle />
      <HeaderList />

      <CardAndFilterHolder/>

      <GridHolder />
      <ButtonFooterTop />
    </div>
  );
};

export default CorseListHolder;
