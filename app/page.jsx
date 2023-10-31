import { IoIosArrowBack } from 'react-icons/io'
import { FiLogOut } from 'react-icons/fi'
import { BiLogoBitcoin } from 'react-icons/bi'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { IoLogoTiktok } from 'react-icons/io5'
import profileImg from './_assets/man.jpg'
import Image from 'next/image'
import PriceBox from './_components/PriceBox'

export default function Home() {
  return (
    <>
      <header>
        <nav className='flex-between p-4 elegant'>
          <IoIosArrowBack />
          <span>Get Coins</span>
          <IoLogoTiktok />
        </nav>
        <div className='flex-between bg-gray-50 px-4 py-2'>
          <div className="profile flex-between">
            <Image
              src={profileImg}
              width={40}
              height={40}
              className='rounded-full'
              alt="Antony George" />
            <div>
              <p className='elegant'>Queen</p>
              <span className='text-gray-400 text-[3.5vw] font-semibold flex items-center gap-1'>
                <BiLogoBitcoin className='text-[#FFDF00]' />
                600
              </span>
            </div>
          </div>
          <div className="logout flex-between gap-2">
            <FiLogOut className='logout_icon' />
            Log out
          </div>
        </div>
      </header>


      <main className='p-4'>
        <div className='elegant'>
          <h1>Recharge</h1>
          <p className='text-red-400 py-2'>
            Save up to 31% compared to in-app purchase 
           <AiOutlineInfoCircle className='inline ps-1 text-gray-400 font-normal' />
          </p>
        </div>
        <div className="price__grid gap-2">
          <PriceBox coin={'70'} price={'0.74'} />
          <PriceBox coin={'350'} price={'3.7'} />
          <PriceBox coin={'700'} price={'7.4'} />
          <PriceBox coin={'1,400'} price={'7.8'} />
          <PriceBox coin={'3,500'} price={'37'} />
          <PriceBox coin={'7000'} price={'74'} />
          <PriceBox coin={'17,500'} price={'185'} />
          <PriceBox coin={'Custom'} price={'Large amount supported'} />
          
        </div>
        <div className="supported__cards"></div>
      </main>


      <footer className='p-4 absolute bottom-0 left-0 w-full'>
        <div className='flex-between elegant py-2'>
          <p>Total</p>
          <p>$ 0.74</p>
        </div>
        <div className='btn__container gap-2'>
          <HiOutlineQuestionMarkCircle className='border-2 text-5xl p-2' />
          <button className=' bg-red-500 text-white elegant'>Recharge</button>
        </div>
      </footer>
    </>
  )
}
