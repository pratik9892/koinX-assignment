import React from 'react'
import TabHeading from '../Heading/TabHeading.jsx'
import sentimentimg from "../../assets/div.exr42mainDiv.png"

const Sentiment = () => {

    const InfoCard = ({title,desc}) => {
        return (
            <div className='md:w-[456px] md:h-[204px] w-[319.1px] h-[142.76px] bg-[#E8F4FD] font-inter flex items-start p-5 rounded-lg gap-4 '>
                <div className='icon  h-[103.22px] w-[30.79px]'>
                    <div className='min-w-[28px] h-[28px] bg-gray-700 rounded-full'>
                            
                    </div>
                </div>
                <div className="content flex flex-col gap-2 w-[257.52px] h-[103.6px] md:h-[148px] md:w-[368px]">
                    <h3 className='font-medium md:text-sm text-xs text-[#191C1F]'>{title}</h3>
                    <h5 className='font-normal text-[10px] md:text-sm text-[#3E5765] overflow-hidden'>{desc}</h5>
                </div>
            </div>
        )
    }

  return (
    <div className='sentiments md:w-[881px] md:h-[632px]  px-[10px] py-4  md:p-5 h-[480px] w-[384px] overflow-hidden rounded-lg font-inter flex flex-col gap-4 bg-[#FFFFFF] my-10'>
        <TabHeading title={"Sentiment"}/>
        <h2 className='text-lg font-semibold text-[#44475B] overflow-hidden'>Key Events</h2>
        <div className='overflow-x-scroll no-scrollbar '>
        <div className='py-4 flex items-center gap-8 overflow-hidden md:w-[926px] md:h-[204px]'>
            <InfoCard desc={"Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."} title={"Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."}/>
            <InfoCard desc={"Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."} title={"Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."}/>
        </div>
        </div>
        <div className='md:w-[710px] md:h-[186px] h-[186px] w-[364px] '>
        <h2 className='text-lg font-semibold text-[#44475B] overflow-hidden'>Analyst Estimates</h2>
        <div className='md:w-[710px] md:h-[120px] h-[120px] w-[364px] my-5'>
                <img src={sentimentimg} alt="" className='w-full h-full object-contain' />
        </div>
        </div>
    </div>
  )
}

export default Sentiment