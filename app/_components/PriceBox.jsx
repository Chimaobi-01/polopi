"use client"

import { BiLogoBitcoin } from 'react-icons/bi'
import CustomModal from './CustomModal'

const PriceBox = ({ coin, price, isOpenCustom, closeCustomModal, openCustomModal }) => {
  return (
    <>
      <div 
        onClick={openCustomModal}
      className="flex flex-col items-center justify-center min-h-[80px] text-center cursor-pointer border-2 hover:border-[#ffdf00]">
        <p className="elegant">
          <BiLogoBitcoin className='text-[#FFDF00] inline text-center ' />
          {coin}
        </p>
        <span className='text-gray-400 text-center text-[3.5vw] font-semibold line__height'>$ {price} </span>
      </div>
     {openCustomModal && <CustomModal isOpenCustom={isOpenCustom} closeCustomModal={closeCustomModal} />}
    </>
  )
}

export default PriceBox