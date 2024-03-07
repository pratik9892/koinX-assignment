import React from 'react'
import TabHeading from '../Heading/TabHeading'
import TrendingCoins from '../TrendingCoins/TrendingCoins'

const Team = ({TrendingData}) => {

    const TeamCard = ({name,designation,description,img}) => {
        return (
            <div className='md:w-full md:h-[177px]  h-[391.51px] w-[363px] p-3  md:p-0 rounded-lg flex flex-col md:flex-row items-center gap-4 bg-[#E8F4FD]'>
                <div className="imgandname flex flex-col items-center justify-between md:w-[20%] gap-2">
                    <img src={img} alt="" className='w-[96px] h-[105px] object-cover rounded-lg '/>
                    <h4 className='font-semibold text-sm text-[#0F1629]'>{name}</h4>
                    <h5 className='font-medium text-xs text-[#788F9B]'>{designation}</h5>
                </div>
                <div className="descp md:w-[80%] flex items-center justify-center">
                    <p className='font-normal text-sm text-[#0F1629]'>{description}</p>
                </div>
            </div>
        )
    }

  return (
    <div className='md:w-[881px] md:h-[776px] rounded-lg bg-[#FFFFFF] md:p-5 w-[384px] h-[1,765px] px-[10px] py-4 '>  
        <div className='flex flex-col gap-4'>
        <TabHeading title={"Team"}/>
        <p className='font-medium text-base text-[#3E424A] leading-6'>Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>
        <div className='flex flex-col gap-8 items-center'>
            <TeamCard description={"Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"}
            designation={"Designation here"}
            name={"John Doe"}
            img={"https://s3-alpha-sig.figma.com/img/4612/91fa/f3f7c54a3f2de230e1912a46193c019c?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TWhkWY0ymnH1NiLvSHmxRYtlJ5phA2WjdDIraFpgytQzkZ89RlUPh~2zissn~5hAVow5WpKMEPVob5Gt423VtCBwqYlyU45kaw9w-day36O1ZpDe1KMjMMDhoVJ35kPvGgXXR2eoVhjNVcVWAc3KTGh5SZhRVYqtpoih2SmEye7jFqlGlxWaDMr1XmFajSnX2EFfGN7tZP5IoTYH-sgyqIeYH0UCSRhnmfr8kwV86NmTXY2ZUFhVf2~W7TEtbDoWXztzvi5twaNI4Bv6lrLgUCovNL91d7vh9rlnZQdMSI79DuIaZjniKVKqWksnLLV~F2x8sy~GbRLGZqX0A7PTpA__"}
            />
            <TeamCard description={"Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"}
            designation={"Designation here"}
            name={"Elina Williams"}
            img={"https://s3-alpha-sig.figma.com/img/4316/c574/4cca8e430c2d9f50e72234abc8fd1c0c?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jUnx4pEpHDP86AqX4C4LeBbKl8nTXgOiKUaNxSKbr91dmGAECOGF0g~XtM5ImutaSsJd6uuszDw6zkHHr9LZq9xxCL7wXDuuWUzvKfD33neNOFbKaeWBRVrQEG7X1VJy-lSViiTU32cI3RTOUogS5mpo8pAToaDB2F74Wn~IL34QElejmtey-mpAxJ2T2SCSBWohzJGGWNkpGO6wivCDR-cU13T34QGUq-tgRM5yNCRqOePc0wO7QJvwIBKs7zV1RjqLZpRYzrCobbRLnZfb9DL3A9EDchYioriZZ9D8Qq8IRu8hGJt0k0n52QegNVHBBVhf7F75LNBnsPB-S~WPhA__"}
            />
            <TeamCard description={"Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"}
            designation={"Designation here"}
            name={"John Smith"}
            img={"https://s3-alpha-sig.figma.com/img/c5f0/f097/f060c63093179c9aa8c4ce86a8cac7f7?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L0TvWkMEpvzWqu3lgSFfn0Cql-W2UPXvIp37Eg58U~jiurGPZoGCpKF81agPfRd2xJ8yG~y9g4x4oOQHjnaklWF-GbwnZz6C5huv0JJd9YZ9u-yHY3pjm5QNg7c-jQY3v6IHQpR1OAY5SmH1i88J6qQQr62qN8I5GVr~qUEQREK9NcscfAE8IWVoqb8laxX99Er2y0bQGvBiJQkVtpKs~wa~Rx05-1MBUHqU4q5bDeeoe4z81IQKSZdU1QJUMM-6XF87IeSF-~y2Tihn7PGmJnO6Hbhuxj9deZLsCoC4sgF3o0VY8eA2pxvOhMe6lfREEUPRik9zSkRy2bDebXMJuQ__"}
            />

        </div>
        <div className='md:hidden flex flex-col gap-3'>
            <TrendingCoins  title={"You May Also Like"} data={TrendingData} />
            <TrendingCoins  title={"Trending Coin's"} data={TrendingData}/>
        </div>
        </div>
        
    </div>
  )
}

export default Team