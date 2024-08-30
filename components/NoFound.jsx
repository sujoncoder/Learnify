import Image from 'next/image'
import Monkey from "../public/assets/images/monkey.png"

const NoFound = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Image src={Monkey} width={150} height={150} alt='Monkey' />
            <span className='text-red-500 text-xl my-4'>Sorry! No data available here.</span>
        </div>
    )
}

export default NoFound