import React from 'react'
import TabHeading from '../Heading/TabHeading.jsx'
import lowhigh from "../../assets/lowhigh.png"


const Performance = ({data,loading}) => {
 
    
const FundamentalItem = ({title,value}) => {
    return (
        <div className='w-[389px] h-[54px]  flex justify-between p-3 font-inter border-b-2 border-[#D3E0E6]'>
            {loading ? <div className='w-[60px] h-[20px] bg-[#D3E0E6] rounded-lg animate-pulse'></div> : <h3 className='title font-medium text-sm text-[#768396]'>{title}</h3>}
            {loading ? <div className='w-[200px] h-[20px] bg-[#D3E0E6] rounded-lg animate-pulse'></div> : <h3 className='title font-medium text-sm text-[#111827]'>{value}</h3>}
        </div>
    )
}

const LowHighComp = ({low,high,curr,duration}) => {
    return (
        <div className='md:w-[830px] md:h-[71px] h-[71px] w-[364px] flex items-center'>
            <div className='low md:h-[71px] md:w-[116px] h-[71px] w-[94px] flex flex-col'>
                <p className='text-sm font-normal text-[#44475B]'>{`${duration} Low`}</p>
                {loading ? <div className='w-[60px] h-[20px] bg-[#D3E0E6] rounded-lg animate-pulse'></div> : <p className='text-base font-medium text-[#44475B]'>{low}</p>}
            </div>
            <div className='indicator md:h-[44.63px] md:w-[598.8px] h-[44.63px] w-[176px] px-2 md:px-0'>
                    <img src={lowhigh} alt="" />
            </div>
            <div className='high md:h-[71px] md:w-[116px] h-[71px] w-[94px] flex flex-col items-end'>
                <p className='text-sm font-normal text-[#44475B]'>{`${duration} High`}</p>
                {loading ? <div className='w-[60px] h-[20px] bg-[#D3E0E6] rounded-lg animate-pulse'></div> : <p className='text-base font-medium text-[#44475B]'>{high}</p>}
            </div>
        </div>
    )
}

  return (
    <div className='md:w-[881px] md:h-[632px]  md:p-5 h-[780px] w-[384px] rounded-lg px-[10px] py-4 font-inter flex flex-col gap-4 bg-[#FFFFFF]'>
            <TabHeading title={"Performance"}/>
            <div className='md:w-[830px] md:h-[172px] h-[172px] w-[364px] '>
                <LowHighComp low={`${data?.market_data?.high_24h?.usd?.toLocaleString("en-US")}`} high={`${data?.market_data?.low_24h?.usd?.toLocaleString("en-US")}`} curr={`${data?.current_price}`} duration="Today's"/>
                <LowHighComp low={`${data?.market_data?.high_24h?.usd?.toLocaleString("en-US")}`} high={`${data?.market_data?.low_24h?.usd?.toLocaleString("en-US")}`} curr={`${data?.current_price}`} duration="52W"/>
            </div>
            <div className='fundamentals md:h-[306px] flex flex-col gap-4 overflow-hidden'>
                <h2 className='text-lg font-semibold text-[#44475B] '>Fundamentals</h2>
                <div className='md:h-[250px] md:w-[820px] flex md:justify-between items-center flex-col md:flex-row '>
                <div className='flex flex-col '>
                    <FundamentalItem title={`${data?.name} Price`} value={`$${data?.market_data?.current_price?.usd.toLocaleString("en-US")}`}/>
                    <FundamentalItem title={"24h Low / 24h High"} value={`$${data?.market_data?.high_24h?.usd?.toLocaleString("en-US")} / $${data?.market_data?.low_24h?.usd?.toLocaleString("en-US")}`}/>
                    <FundamentalItem title={"7d Low / 7d High"} value={"$16,382.07 / $16,874.12"}/>
                    <FundamentalItem title={"Trading Volume"} value={`$${data?.market_data?.total_volume?.usd?.toLocaleString("en-US")}`}/>
                    <FundamentalItem title={"Market Cap Rank"} value={`#${data?.market_cap_rank}`}/> 
                </div>
                <div className='flex flex-col  '>
                    <FundamentalItem title={"Market Cap"} value={`$${data?.market_data?.market_cap?.usd?.toLocaleString("en-US")}`}/>
                    <FundamentalItem title={"Market Cap Dominance"} value={"$16,815.87"}/>
                    <FundamentalItem title={"Volume / Market Cap"} value={"$16,815.87"}/>
                    <FundamentalItem title={"All-Time High"} value={`$${data?.market_data?.ath?.usd?.toLocaleString("en-US")}`}/>
                    <FundamentalItem title={"All-Time Low"} value={`$${data?.market_data?.atl?.usd?.toLocaleString("en-US")}`}/>
                </div>
                </div>
            </div>
    </div>
  )
}

export default Performance