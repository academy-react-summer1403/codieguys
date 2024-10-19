import { CardWithTopLogoHolder } from "../CardWithTopLogoHoder";
import { Filter } from "../filter/Filter";
const CardAndFilterHolder = () => {
  return (
    <div className="flex flex-row-reverse justify-center my-12 gap-12 items-start w-full ">
      <div className="flex flex-3">
        <CardWithTopLogoHolder />
      </div>

      <div className="flex ">
        <Filter />
      </div>
    </div>
  );
};

export { CardAndFilterHolder };
