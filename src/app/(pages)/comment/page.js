import Antalys from "@/app/components/OtherPage/ANTALYA/Antalys";
import AnyWhereFrom from "@/app/components/OtherPage/AnyWhereFrom/AnyWhereFrom";
import BankKong from "@/app/components/OtherPage/BankKong/Bankkong";
import Dust from "@/app/components/OtherPage/Dustoffyour/Dust";
import Flonrence from "@/app/components/OtherPage/FLORENCE/Flonrence";
import Form from "@/app/components/OtherPage/Form/Form";
import IceLand from "@/app/components/OtherPage/IceLand/IceLand";
import Istanbul from "@/app/components/OtherPage/ISTANBUL/Istanbul";
import Japan from "@/app/components/OtherPage/JAPAN/Japan";
import LavesGas from "@/app/components/OtherPage/LASVEGAS/LavesGas";
import Madrid from "@/app/components/OtherPage/MADRID/Madrid";
import Moroco from "@/app/components/OtherPage/MOROCCO/Moroco";
import Nambia from "@/app/components/OtherPage/Nambia/Nambia";
import Paris from "@/app/components/OtherPage/PARIS/Paris";
import Sidebar from "@/app/components/OtherPage/SideBar/Sidebar";
import Singaposre from "@/app/components/OtherPage/SINGAPORE/Singaposre";
import Wales from "@/app/components/OtherPage/WALES/Wales";
import Yucatan from "@/app/components/OtherPage/YUCATÁN/Yucatan";
import Zermat from "@/app/components/OtherPage/ZERMATT/Zermatt";
import React from "react";

const page = () => {
  return (
    <div className="max-w-[1400px] w-[100%]lg:w-[90%] mx-auto px-[20px] md:px-[30px] lg:px-[40px] lg:flex ">
      <div className="w-full lg:w-[65%]">
      <Dust />
      <Paris />
      <Nambia />
      <BankKong />
      <IceLand />
      <LavesGas />
      <Zermat />
      <Madrid />
      <Antalys />
      <Singaposre />
      <Wales />
      <Istanbul />
      <Yucatan />
      <Flonrence />
      <Moroco />
      <Japan />
      <AnyWhereFrom />
      <Form />
      </div>
      <div className="w-full lg:w-[35%] h-full">
        <Sidebar />
      </div>
    </div>
  );
};

export default page;
