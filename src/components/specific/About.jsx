import React from 'react'
import TabHeading from '../Heading/TabHeading'
import Button from '../Button/Button'

const About = ({data,loading}) => {
  return (
    <div className='md:w-[881px] md:h-[995px] w-[384px] h-[1,456.72px] bg-[#FFFFFF] rounded-lg md:p-5 font-inter px-[10px] py-4 '>
        <TabHeading title={"About"}/>
        <div className='py-4 border-b-2 border-[#C9CFDD]'>
            <h3 className='font-bold text-lg text-[#0B1426]'>{`What is ${data?.name}?`}</h3>
            {loading ? <div className='w-full h-[80px] bg-gray-300 animate-pulse rounded-xl'></div> :<p className='font-medium text-base text-[#3E424A] leading-6 line-clamp-4'>{data?.description?.en}</p>}
        </div>
        <div className='py-4 border-b-2 border-[#C9CFDD]'>
            <h3 className='font-bold text-lg text-[#0B1426]'>Lorem ipsum dolor sit amet</h3>
            <div className='flex flex-col gap-6'>
            <p className='font-medium text-base text-[#3E424A] leading-6'>Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.</p>
            <p className='font-medium text-base text-[#3E424A] leading-6'>Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.</p>
            <p className='font-medium text-base text-[#3E424A] leading-6'>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
            </div>    
        </div>
        <div className='md:border-b-2 md:border-[#C9CFDD] py-6'>
        <TabHeading title={`Already Holding ${data?.name}?`} className={"py-4"}/>
        <div className='md:w-[807px] md:h-[151px]   flex items-center justify-between flex-col md:flex-row gap-4 md:gap-0 '>
            <div className='md:w-[388px] md:h-[151px] h-[140.9px] w-[362.04px]  bg-gradient-to-r from-[#79F1A4] to-[#0E5CAD] rounded-lg flex items-center px-4 md:gap-8 gap-10'>
                <div className=''>
                    <div className='w-[128px] h-[128px]'>
                        <img 
                        className='w-full h-full object-cover rounded-xl'
                        src="https://s3-alpha-sig.figma.com/img/4a59/7cf5/e39cee97d83ba894aa0c105133924b9b?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vi1JQ3hvHi19McrbQNtrRQkrzmirX8aN6JYBkBbPNYLTG7yrFI6JXcl18-tOwdUn2LdgBTpdGB-R~Ax8NfzXa2iiZ5W86NR3yoXW3Ps-nM-kH0v3RlcHrBlPaN4P3~BROWgKKlCxaGK64z8qNL5Vxr77xFJeeayGUU1Q6sEvMgT8PuD2XDwYMpM8d6TinTA41L2~oD9ra9xS25Qzn6YEGC0Ne84ECHec1XXIBZnqp7BWcO70gd8ySYKUS5llmqkqWH5ovJKu7vcMwcL1kqogBpdXTV9CbM1hgSQBz-hB08RfGro-4w5FKF8m~ujVWlzJC-eMwcZ7noWxeF4sYeTq3A__" alt="" />
                    </div>
                </div>
                <div className='w-[195px] h-[104px] flex flex-col items-start gap-4'>
                    <h1 className='font-bold text-xl text-[#FFFFFF]'>Calculate Your Profits</h1>
                    <Button icon={"➔"} text={"Check Now"} className={"w-[132px] h-[32px] rounded-lg text-sm font-semibold leading-7 text-[#0F1629] bg-[#FFFFFF] p-2 flex items-center justify-center"}/>
                </div>
            </div>
            <div className='md:w-[388px] md:h-[151px] h-[140.9px] w-[362.04px] bg-gradient-to-r from-[#FF9865] to-[#EF3031] rounded-lg flex items-center px-4 md:gap-8 gap-10'>
            <div className=''>
                    <div className='w-[128px] h-[128px]'>
                        <img 
                        className='w-full h-full object-cover rounded-xl'
                        src="https://s3-alpha-sig.figma.com/img/b324/e6e3/5c577ca47c764bd8af01d840fe7ffccb?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iPVUHiBP1sj~Wqj-jX6JXhkY69WoofuEac3xLCr1EqW17s1ORlvyTaKXFhM8CY4BX8yTKWaFYSHXTJLoOTs9NNvpAQC5PCuRD-2MmQvQveuY3At4m7UG-9vt2MwzQdn-W0oYm3B~E5El1VPZebU-D9eXWZ6ekmEIan6L~Mmf8wR3hVKjqMqLVyTb2~P04q-16~IggO2xVsP7JgP9ewUFx1gU2EsrxDSKOgX-95csf6JMSKRWvUFWtzzej4xdZ8qIRY1I7YTqHSTyEuBYyb-ylUd3u6CcjTYUgK5M6JrhUFJ9gG2qdu4c02G-kAsF8Iiv1wE8wxwf8y-D2QONK8GnBg__" alt="" />
                    </div>
                </div>
                <div className='w-[195px] h-[104px] flex flex-col items-start gap-4'>
                    <h1 className='font-bold text-xl text-[#FFFFFF]'>Calculate your tax liability</h1>
                    <Button icon={"➔"} text={"Check Now"} className={"w-[132px] h-[32px] rounded-lg text-sm font-semibold leading-7 text-[#0F1629] bg-[#FFFFFF] p-2 flex items-center justify-center"}/>
                </div>
            </div>
        </div>
        </div>
        <p className='font-medium text-base text-[#3E424A] leading-6 py-8 md:block hidden'>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
    </div>
  )
}

export default About