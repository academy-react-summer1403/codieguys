import { CardWithTopLogoHolder } from "../CardWithTopLogoHoder";
import { Filter } from "../filter/Filter";
const CardAndFilterHolder = () => {
  return (
    <div className="flex flex-col  justify-center w-full ">
      <div className="flex flex-3">
        <CardWithTopLogoHolder />
      </div>

      <div className="flex flex-1">
        <Filter />
      </div>
    </div>
  );
};

export { CardAndFilterHolder };
