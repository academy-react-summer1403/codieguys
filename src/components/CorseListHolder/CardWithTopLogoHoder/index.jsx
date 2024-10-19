import { CardWithTopLogo } from "../CardWithTopLogo";

const CardWithTopLogoHolder = () => {
  return (
    <div className="grid grid-cols-3 w-full items-center justify-center  min-h-[2317px] shadow-2xl gap-3  grid-flow-col bg-custom-gray ">
      <CardWithTopLogo />
      <CardWithTopLogo />
      <CardWithTopLogo />
    </div>
  );
};

export  { CardWithTopLogoHolder };
