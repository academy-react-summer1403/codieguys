import { CardWithTopLogo } from "../CardWithTopLogo";

const CardWithTopLogoHolder = () => {
  return (
    <div className="grid grid-cols-3 w-full items-start justify-start  shadow-2xl gap-3  bg-custom-gray ">
      <CardWithTopLogo />
      <CardWithTopLogo />
      <CardWithTopLogo />
    </div>
  );
};

export { CardWithTopLogoHolder };
