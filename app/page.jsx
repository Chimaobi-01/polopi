"use client"

import { useState } from 'react'
import AppModal from './_components/AppModal'

import { IoIosArrowBack } from 'react-icons/io'
import { FiLogOut } from 'react-icons/fi'
import { BiLogoBitcoin } from 'react-icons/bi'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { IoLogoTiktok } from 'react-icons/io5'
import profileImg from './_assets/man.jpg'
import Image from 'next/image'
import PriceBox from './_components/PriceBox'
import jcb from './_assets/jcb.svg'
import mastercard from './_assets/mastercard.svg'
import paypal from './_assets/paypal.svg'
import visa from './_assets/visa.svg'
import Footer from './_components/Footer'




export default function Home() {
  const [isOpen, setIsOpen ] = useState(false)
  const [isOpenCustom, setIsOpenCustom ] = useState(false)
  const openAppModal = () => setIsOpen(true)
  const closeAppModal = () => setIsOpen(false)
  const openCustomModal = () => setIsOpenCustom(true)
  const closeCustomModal = () => setIsOpenCustom(false)

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
              className='rounded-full pe-1'
              alt="Antony George" />
            <div>
              <p className='elegant leading-none'>hush_khaled</p>
              <span className='text-gray-400 text-[3.5vw] font-semibold flex items-center gap-1'>
                <BiLogoBitcoin className='text-[#FFDF00]' />
                600
              </span>
            </div>
          </div>
          <div className="logout flex-between elegant gap-2">
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
          <PriceBox
           coin={'Custom'}
            price={'Large amount supported'}
            isOpenCustom={isOpenCustom}
            closeCustomModal={closeCustomModal}
            openCustomModal={openCustomModal}
            />
        </div>
        <div className="supported__cards flex items-center gap-1 py-2">
          <i className='w-12'>
          <Image 
            src={visa}
            alt='visa'
            className=' max-w-full border bg-slate-100'
          />
          </i>
          <i className=''>
          <Image 
            src={mastercard}
            alt='mastercard'
            className=' w-12 ps-2 '
          />
          </i>
          <i className='w-10'>
          <Image 
            src={jcb}
            alt='jcb'
            className=' max-w-full border bg-slate-100'
          />
          </i>
          <i className=''>
          <Image 
            src={paypal}
            alt='paypal'
            className=' w-5 '
          />
          </i>
          
        </div>
      </main>


      <AppModal 
        isOpen={isOpen}
        closeAppModal={closeAppModal}
      />
      <Footer 
        total={'Total'}
        price={'0.74'}
        question={true}
        openAppModal={openAppModal}
      />
    </>
  )
}
