import React from 'react'
import TradingViewWidget from '../CoinInfocomp/CoinChart'
import {useFetch} from '../../hooks/useFetch'
import TabHeading from '../Heading/TabHeading'

const CoinInfo = ({data,loading}) => {

  return (
    <div className='md:w-[881px] md:h-[711px] w-[384px] h-[391px] md:p-5 px-[10px] py-4  font-inter overflow-hidden bg-[#FFFFFF] rounded-lg'>
        <div className='w-full md:gap-8 flex flex-col gap-4'>
            <div className="title flex items-center gap-2 h-[40px]">
                {loading ? <div className='w-[36px] h-[36px] bg-gray-300 animate-pulse rounded-xl'></div> : <img src={`${data?.image?.large}`} alt="" className='w-[36px] h-[36px] object-cover '/>}
                {loading ? <div className='w-[200px] h-[20px] bg-gray-300 animate-pulse rounded-xl'></div> : <TabHeading title={data?.name}/>}
                {loading ? <div className='w-[80px] h-[40px] bg-gray-300 animate-pulse rounded-xl'></div> : <h3 className='font-semibold text-base text-[#5D667B] leading-5'>{data?.symbol?.toUpperCase()}</h3>}
                {loading ? <div className='w-[80px] h-[40px] bg-gray-300 animate-pulse rounded-xl'></div> : <div className='w-[100px] h-[40px] rounded-lg border-[1px] border-[#808A9D] bg-[#808A9D] flex items-center justify-center md:ml-10 ml-5'>
                    <p className='font-medium text-base text-[#FFFFFF]'>{`Rank #${data?.market_cap_rank}`}</p>
                </div>}
            </div>
            <div className="price h-[66px] w-[568.72px] flex items-start flex-col">
                <div className='price-curr h-[39px] flex items-center gap-8'>
                    {loading ? <div className='w-[100px] h-[40px] bg-gray-300 animate-pulse rounded-xl'></div> : <h1 className="price font-semibold text-3xl price-usd">{`$${data?.market_data?.current_price?.usd.toLocaleString("en-US")}`}</h1>}
                    <div className='h-[36px] w-[150px] flex items-center gap-4'>
                    {loading ? <div className='w-[39px] h-[27px] bg-gray-300 animate-pulse rounded-xl'></div> : <div className={`percent-up-down h-[28px] w-[84px] rounded-md flex items-center justify-center ${data?.market_data?.price_change_percentage_24h > 0 ? "bg-[#EBF9F4]" : "bg-[#f9eeeb]"}`}>
                        <p className={`font-medium text-base  ${data?.market_data?.price_change_percentage_24h > 0 ? "text-[#14B079]" : "text-[#f07b7b]"}`}>{`${data?.market_data?.price_change_percentage_24h > 0 ?  "▲ " : "▼ "}${data?.market_data?.price_change_percentage_24h?.toFixed(2)}%`}</p>
                    </div>}
                    <div className='w-[39px] h-[27px]'>
                            <p className='font-medium text-sm text-[#768396] leading-7'>(24H)</p>
                        </div>
                </div>
                </div>  
                {loading ? <div className='w-[100px] h-[20px] my-1 bg-gray-300 animate-pulse rounded-xl'></div> : <div className="price-in-inr">
                    <p className='font-medium text-base text-[#0B1426]'>{`₹${data?.market_data?.current_price?.inr.toLocaleString()}`}</p>
                </div>}
            </div>
            <div className='border-[1px] border-[#DEE1E6]'>

            </div>
            <div className="tradingviewchart md:h-[460px] md:w-[837px] h-[216.84px] w-[364px]">
            <TradingViewWidget/>
        </div>
        
        </div>
        
        
    </div>
    
  )
}

export default CoinInfo
