import React from 'react'
import AsideAd from '../components/specific/AsideAd'
import CoinAdditionalInfo from '../components/CoinAdditionalInfo'
import Trending from '../components/specific/Trending'
import TrendingCoins from '../components/TrendingCoins/TrendingCoins'
import { useFetch } from '../hooks/useFetch'
import { useParams } from 'react-router-dom'


const CryptocurrInfo = () => {

  const {data,loading} = useFetch("/search/trending")
  const {coinId} = useParams()

  return (
    <React.Fragment>
    <h2 className=' text-left font-inter md:px-28 pl-6 bg-[#EFF2F5] md:pt-8 md:pb-8 pt-2 font-normal text-sm text-[#3E5765]'>{`Cryptocurrencies  ${">>  "}`}<span className='font-medium text-sm text-[#0F1629] underline'>{coinId.charAt(0).toUpperCase() + coinId.slice(1)}</span></h2>
    <div className='bg-[#EFF2F5] md:h-[5215px] w-full h-[6171px] md:w-full md:pb-10 py-0  flex items-center justify-center font-inter flex-col'>
        <div className='md:w-[1328px] md:h-full  flex items-start gap-5 flex-col md:flex-row '>
            <div className='main md:w-[881px] md:h-[2287px]  rounded-lg w-[384px] h-[5,611.36px)] '>
                <CoinAdditionalInfo coinId={coinId} TrendingData={data?.coins}/>
            </div>
            <aside className='md:w-[427px] md:h-[1923px] h-[641px]  w-[385px] flex flex-col gap-10 sticky'>
                <AsideAd/>
                <Trending/>
            </aside>
        </div>
        <div className='w-full h-[628px]  md:flex items-center flex-col bg-[#FFFFFF] justify-center hidden '>
          <TrendingCoins title={"You May Also Like"} data={data?.coins} loading={loading}/>
          <TrendingCoins title={"Trending Coins"} data={data?.coins?.slice().reverse()} loading={loading}/>
        </div>
    </div>
    </React.Fragment>
  )
}

export default CryptocurrInfo