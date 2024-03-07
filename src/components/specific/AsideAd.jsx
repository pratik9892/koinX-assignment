import React from "react";
import asideImage from "../../assets/Frame.png";
import Button from "../Button/Button";

const AsideAd = () => {
  return (
    <React.Fragment>
      <div className="md:w-full md:h-[515px] w-[379px] h-[384px] bg-[#0052FE] rounded-lg md:px-[16px] md:py-[31px] gap-5 flex flex-col items-center  py-4 ">
        <div className="font-semibold md:h-[182px] md:w-[327px] h-[117px] w-[359px] flex flex-col items-center gap-2">
          <h2 className=" text-white h-[80px] w-[268px] md:text-2xl text-center text-xl font-bold">
            Get Started with KoinX for FREE
          </h2>
          <p className="text-sm text-center font-medium text-[#F2F2F2] leading-6">
            With our range of features that you can equip for free,KoinX allows
            you to be more educated and aware of your tax reports.
          </p>
        </div>
        <div className="md:w-[178.66px] md:h-[166.22px] h-[139px] w-[149px]">
          <img src={asideImage} alt="" width={"100%"} height={"100%"} />
        </div>
        <Button
          text={"Get Started for free"}
          className={
            "w-[237px] h-[48px] rounded-lg font-semibold leading-7 text-[#0F1629] bg-[#FFFFFF] px-6 py-2"
          }
          icon={" ➔"}
        />
      </div>
    </React.Fragment>
  );
};

export default AsideAd;
