import React from "react";
import TabHeading from "../Heading/TabHeading";

const TrendingCoins = ({ title, data, loading }) => {
  const skeleton = () => {
    return (
      <div className="md:w-[252px] md:h-[160px] rounded-2xl h-[158.85px] w-[101.78px] animate-pulse bg-gray-200">
        {" "}
      </div>
    );
  };

  return (
    <div className="h-[140.78px] w-[362px] md:h-[246px] md:w-[1300px] flex flex-col md:gap-4 gap-2 ">
      <TabHeading title={title} className="text-lg" />
      <div className="md:h-[160px] md:w-[1300px]  h-[106.78px] w-[] overflow-x-scroll flex items-start gap-2 no-scrollbar">
        {loading ? (
          <div className="flex items-center justify-between gap-2">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        ) : (
          <React.Fragment>
            {data?.map((item) => {
              return (
                <div className="md:w-[252px] md:h-[160px] h-[100.78px] w-[165.26px] md:p-4 py-[8px] px-[4px] border-2 border-[#E3E3E3] rounded-lg flex items-start flex-col gap-1">
                  <div className="coin-info md:h-[38px] md:w-[218px] w-[137.57px] h-[23.97px]  flex items-center gap-2">
                    <img
                      src={item?.item?.large}
                      alt=""
                      className="md:h-[26px] md:w-[26px] h-[16.4px] w-[16.4px] object-cover"
                    />
                    <h3 className="font-normal md:text-base text-xs text-[#202020]">
                      {item?.item?.symbol}
                    </h3>
                    <div
                      className={` md:text-base text-center md:rounded-md py-[0.5px] px-1 w-[36px] h-[15px] text-[8px] md:w-[80px] md:h-[25px]
                        ${
                          item?.item?.data?.price_change_percentage_24h?.usd < 0
                            ? "bg-red-500 bg-opacity-50"
                            : "bg-green-500 bg-opacity-50"
                        }
                        `}
                    >{`${
                      item?.item?.data?.price_change_percentage_24h?.usd < 0
                        ? "▼"
                        : "▲"
                    }  ${item?.item.data?.price_change_percentage_24h?.usd.toFixed(
                      2
                    )}`}</div>
                    <div></div>
                  </div>
                  <div className="coin-price w-[137.65px] h-[24px] md:h-[24px] md:w-[218px]  overflow-hidden">
                    <h2 className="md:text-xl text-sm font-medium text-[#171717]">
                      {item?.item?.data?.price}
                    </h2>
                  </div>
                  <div className="coin-chart w-[125.85px] h-[37.75px] md:w-[200px] md:h-[60px]">
                    <img
                      src={item?.item?.data?.sparkline || ""}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              );
            })}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default TrendingCoins;
