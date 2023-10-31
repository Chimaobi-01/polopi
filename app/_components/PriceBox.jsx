import { BiLogoBitcoin } from 'react-icons/bi'

const PriceBox = ({ coin, price }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70px] text-center cursor-pointer border-2 hover:border-[#ffdf00]">
        <p className="elegant">
        <BiLogoBitcoin className='text-[#FFDF00] inline text-center ' />
            {coin}
        </p>
        <span className='text-gray-400 text-center text-[3.5vw] font-semibold line__height'>$ { price } </span>
    </div>
  )
}

export default PriceBox