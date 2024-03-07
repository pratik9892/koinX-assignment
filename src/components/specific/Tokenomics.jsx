import React from 'react'
import TabHeading from '../Heading/TabHeading'
import tokenimg from "../../assets/div.tokenomics-wrapper.png"

const Tokenomics = () => {
  return (
    <div className='md:w-[881px] md:h-[539px] md:p-5 bg-[#FFFFFF] my-10 rounded-lg px-[10px] py-4 '>
        <TabHeading title={"Tokenomics"}/>
        <div className='py-4 flex flex-col gap-4'>
            <h3 className='font-semibold text-xl text-[#1D1D1D]'>Initial Distribution</h3>
            <div className='w-[810] h-[210px] hidden md:block'>
              <img src={tokenimg} alt=""  className='w-full h-full object-contain'/>
            </div>
        </div>
        <div>
            <p className='font-medium text-base text-[#3E424A] leading-6'>Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.</p>
        </div>
    </div>
  )
}

export default Tokenomics