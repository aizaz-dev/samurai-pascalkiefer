import React from "react";

const Whatyouwant = () => {
  const products = [
    {
      id: 1,
      imgURL: "/Samurai/Icon-Search.png",
      title: "Clear Insights",
      description:
        "Turn raw data into actionable reports for a clearer, bigger picture.",
    },
    {
      id: 1,
      imgURL: "/Samurai/Icon-Scale.png",
      title: "Informed Decisions",
      description:
        "Give your business the power of data-driven insights to make sharp business decisions.",
    },
    {
      id: 1,
      imgURL: "/Samurai/Icon-Growth.png",
      title: "Strategic Growth",
      description:
        "Ensure your company's long-term success by leveraging the power of information.",
    },
  ];
  return (
    <div className=" w-full bg-[#000000]">
      <div className=" w-full max-w-[1200px] mx-auto px-[16px] sm:px-[80px] sm:py-[60px] py-[20px]">
        <div className=" text-center">
          <h1 className=" Inter font-[400] text-[32px] text-[#ffffff]">
            What you get:
          </h1>
        </div>

        <div className=" w-full flex sm:flex-row flex-col gap-8 ">
          {products.map((item) => {
            return (
              <div key={item.id} className=" w-full flex flex-col gap-4 px-[10px]">
                <div className="h-[200px]  md:w-[200px] w-full">
                  <img
                    src={item.imgURL}
                    alt=""
                    className=" w-[200px]  m-auto  h-full"
                  />
                </div>
                <h1 className=" text-[#ffffff] Inter font-[700] text-[24px]">
                  {item.title}
                </h1>
                <p className=" text-[#ffffff] text-[24px] Inter font-[500]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Whatyouwant;
