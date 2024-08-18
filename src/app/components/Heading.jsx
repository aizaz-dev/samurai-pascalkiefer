
const Heading = ({ text1, text2 }) => {
  return (
    <h1 className="text_primary jost text-[24px] sm:text-[28px] md:text-[30px] lg:text-[36px] font-normal">
      {text1} <br /> {text2}
    </h1>
  );
};

const Heading2 = ({ heading }) => {
  return (
    <h2 className="jost text-[24px] font-medium text_primary my-[20px]">{heading}</h2>
  );
};

export { Heading, Heading2 };
