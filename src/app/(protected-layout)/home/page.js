import Brands from "@/components/findPartner/Brands";
import HeroBanner from "@/components/pro-home/HeroBanner";
import ProGlobalNetwork from "@/components/pro-home/ProGlobalNetwork";
import WayToInvest from "@/components/pro-home/WayToInvest";
import React from "react";

const ProtectHomePage = () => {
  return (
    <>
      <HeroBanner />
      <Brands title={"Top fund raise startup"} />
      <WayToInvest />
      <ProGlobalNetwork />
    </>
  );
};

export default ProtectHomePage;
