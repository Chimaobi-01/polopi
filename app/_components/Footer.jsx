import { HiOutlineQuestionMarkCircle } from 'react-icons/hi'


const Footer = ({ total, price, question, openAppModal }) => {
  return (
    <footer className={!question ? 'px-6': 'p-4 absolute bottom-0 left-0 w-full'}>
        <div className='flex-between elegant py-2'>
          <p>{total}</p>
          <p>$ {price}</p>
        </div>
        <div className={!question ?'flex':'btn__container gap-2' }>
          {question && <HiOutlineQuestionMarkCircle className='border-2 text-5xl p-2' />}
          <button 
            onClick={openAppModal}
            className={!question ?' bg-rose-600 text-white elegant py-4 w-full rounded-xl': 'bg-rose-600 text-white elegant'}>
              Recharge
            </button>
        </div>
      </footer>
  )
}

export default Footer