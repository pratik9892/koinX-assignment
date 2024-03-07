import React from 'react'
import Navigation from './Navigation/Navigation'
import Performance from './specific/Performance'
import Sentiment from './specific/Sentiment'
import About from './specific/About'
import Tokenomics from './specific/Tokenomics'
import Team from './specific/Team'
import CoinInfo from './specific/CoinInfo'
import { useFetch } from '../hooks/useFetch'

const CoinAdditionalInfo = ({coinId,TrendingData}) => {


  const {data, loading} = useFetch(`/coins/${coinId}`) 

  
  return (
    <div>
        <CoinInfo data={data} loading={loading}/>
        <Navigation/>
        <Performance data={data} loading={loading}/>
        <Sentiment/>
        <About data={data} loading={loading}/>
        <Tokenomics/>
        <Team TrendingData={TrendingData}/>
    </div>
  )
}

export default CoinAdditionalInfo