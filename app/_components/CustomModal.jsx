"use client"

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { BiLogoBitcoin } from 'react-icons/bi'

import Footer from "./Footer";

const CustomModal = ({ isOpenCustom, closeCustomModal }) => {

    const [ coinInput, setCoinInput ] = useState('')





  return (
    <>
      <Transition appear show={isOpenCustom} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeCustomModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="flex-between elegant border-b-2 p-6">
                    <HiOutlineQuestionMarkCircle />
                    Custom
                    <RxCross1 />
                  </Dialog.Title>
                  <label 
                    htmlFor=""
                    className="relative "
                  >
                    <span className="flex gap-2 elegant items-center my-3 ps-6">
                    Number of Coins
                    <IoIosArrowDown />
                    </span>
                    <input 
                        type="text"
                        className="flex outline-none w-full p-3 ps-12 pr-6 border-2 elegant "
                        placeholder="30 - 2,500,000"
                        value={coinInput}
                        onChange={e => setCoinInput(e.target.value)}
                     />
                     <BiLogoBitcoin className='text-[#FFDF00] inline text-center text-xl absolute bottom-5 left-4' />
                  </label>

                  <div className="input__grid grid grid-cols-4 py-4 gap-2 px-6">
                    <button
                     className="border-2 p-4 bg-gray-100 elegant flex-center text-center hover:bg-gray-200">1</button>
                    <button className="border-2 p-4 bg-gray-100 elegant flex-center text-center hover:bg-gray-200">2</button>
                    <button className="border-2 p-4 bg-gray-100 elegant flex-center text-center hover:bg-gray-200">3</button>
                    <button className="border-2 p-4 bg-gray-100 elegant flex-center text-center hover:bg-gray-200"><RiDeleteBack2Fill /></button>
                    <button className="border-2 p-4 bg-gray-100 elegant flex-center text-center hover:bg-gray-200">4</button>
                    <button className="border-2 p-4 bg-gray-100 elegant flex-center text-center hover:bg-gray-200">5</button>
                    <button className="border-2 p-4 bg-gray-100 elegant flex-center text-center hover:bg-gray-200">6</button>
                    <button className="border-2 p-4 bg-gray-100 elegant flex-center text-center hover:bg-gray-200">000</button>
                    <button className="border-2 p-4 bg-gray-100 elegant flex-center text-center hover:bg-gray-200">7</button>
                    <button className="border-2 p-4 bg-gray-100 elegant flex-center text-center hover:bg-gray-200">8</button>
                    <button className="border-2 p-4 bg-gray-100 elegant flex-center text-center hover:bg-gray-200">9</button>
                    <button className="border-2 p-4 bg-gray-100 elegant flex-center text-center hover:bg-gray-200">0</button>
                  </div>


                  <div className="mt-4">
                    <Footer
                      total={"Total"}
                      price={"0.74"}
                      openAppModal={closeCustomModal}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CustomModal;
