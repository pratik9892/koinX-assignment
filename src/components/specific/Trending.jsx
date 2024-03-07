import React from 'react'
import TabHeading from '../Heading/TabHeading'
import { useFetch } from '../../hooks/useFetch'

const Trending = () => {

    const {data,loading} = useFetch("/search/trending")
    // console.log(data?.coins)
    const coin1 = data?.coins?.[Math.floor(Math.random() * data?.coins.length)]
    const coin2 = data?.coins?.[Math.floor(Math.random() * data?.coins.length)]
    const coin3 = data?.coins?.[Math.floor(Math.random() * data?.coins.length)]


    const TrendingItem = ({src,title,percent,percentValue}) => {
        return (
            <React.Fragment>
                {loading ? <div className='w-full h-[80px] bg-gray-200 animate-pulse rounded-lg'>

                </div>: <div className='flex items-start justify-between my-1 md:my-2 w-[349px] h-[28px] md:h-[28px] md:w-[379px] mx-auto'>
                <div className="title flex items-center gap-2">
                    <img src={src} alt="" className='w-[24px] h-[24px]'/>
                    <p className='font-medium text-base text-[#OF1629]'>{title}</p>
                </div>
                <div className="percent">
                    <div className={`w-[98px] h-[28px]  rounded flex items-center justify-center gap-2 p-2 ${percentValue ? "bg-green-500 bg-opacity-50 " : "bg-red-500 bg-opacity-50"}`}  >
                        <p className='font-medium text-sm'>{`${percentValue ? "▲" : "▼"} ${percent} %`}</p>
                    </div>
                </div>
            </div>}
            </React.Fragment>
        )
    }

  return (
    <div className='md:h-[225px] md:w-[427px] p-6 bg-[#FFFFFF] rounded-lg px-[10px] py-4 flex flex-col gap-2'>
        <TabHeading title={"Trending Coins (24h)"}/>
        <div className='flex flex-col gap-2 w-[359px] h-[124px] md:w-[379px] mx-auto jus'>
            <TrendingItem src={coin1?.item?.large} title={coin1?.item?.name} percent={coin1?.item?.data?.price_change_percentage_24h?.usd.toFixed(2)}
            percentValue={coin1?.item?.data?.price_change_percentage_24h?.usd > 0 ? true : false}
            />
            <TrendingItem src={coin2?.item?.large} title={coin2?.item?.name} percent={coin2?.item?.data?.price_change_percentage_24h?.usd.toFixed(2)}
            percentValue={coin2?.item?.data?.price_change_percentage_24h?.usd > 0 ? true : false}
            />
            <TrendingItem src={coin3?.item?.large} title={coin3?.item?.name} percent={coin3?.item?.data?.price_change_percentage_24h?.usd.toFixed(2)}
            percentValue={coin3?.item?.data?.price_change_percentage_24h?.usd > 0 ? true : false}
            />
        </div>
    </div>
  )
}

export default Trending