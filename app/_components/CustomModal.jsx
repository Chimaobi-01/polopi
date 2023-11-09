"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const CustomModal = ({ customModalState, closeCustomModal }) => {
  return (
    <>
      <Transition appear show={customModalState} as={Fragment}>
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
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center text-center">
              <Transition.Child as={Fragment}>
                <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6  shadow-xl transition-all  pb-safe fixed z-2000 flex flex-col high visible">
                  <Dialog.Title
                    as="div"
                    className="flex-shrink-0 tt-sheet__header relative"
                  >
                    <div className="TUXNavBar top-0 left-0 right-0">
                      <header className="flex items-center px-8 overflow-hidden h-14 relative">
                        <div className="inline-flex items-center justify-start flex-1 h-full">
                          <button className="h-14 w-14 p-0 text-2xl  flex items-center justify-center ">
                            <svg
                              fill="currentColor"
                              font-size="22px"
                              viewBox="0 0 48 48"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M24 6a18 18 0 100 36 18 18 0 000-36zM2 24a22 22 0 1144 0 22 22 0 01-44 0zm22.1-9c-1.93 0-3.76 1.23-4.84 3.61-.23.5-.79.79-1.31.62l-1.9-.64a.94.94 0 01-.6-1.25C16.98 13.7 20.05 11 24.1 11A7.9 7.9 0 0132 18.9c0 2.31-1.21 4.56-2.78 6.17A10.2 10.2 0 0123 27.95c-.55.05-1-.4-1-.95v-2c0-.55.45-1 1-1.08 1.23-.2 2.5-.77 3.35-1.64A5.27 5.27 0 0028 18.91 3.9 3.9 0 0024.1 15zM24 36a3 3 0 110-6 3 3 0 010 6z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <div className="truncate flex-3 px-4 text-center font-bold leading-[52px]">
                          Custom
                        </div>
                        <div className="flex-1 inline-flex items-center justify-end h-full">
                          <button className="h-14 w-14 p-0 flex items-center justify-center text-2xl">
                            <svg
                              fill="currentColor"
                              data-e2e="exchange-keypad-cross"
                              viewBox="0 0 48 48"
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M21.17 24l-7.88-7.88a1 1 0 010-1.41l1.42-1.42a1 1 0 011.41 0L24 21.17l7.88-7.88a1 1 0 011.41 0l1.42 1.42a1 1 0 010 1.41L26.83 24l7.88 7.88a1 1 0 010 1.41l-1.42 1.42a1 1 0 01-1.41 0L24 26.83l-7.88 7.88a1 1 0 01-1.41 0l-1.42-1.42a1 1 0 010-1.41L21.17 24z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0">
                          <div
                            role="separator"
                            className="flex flex-shrink-0 box-border h-[1px] w-full bg-[rgba(22,24,35,0.2)]"
                          ></div>
                        </div>
                      </header>
                    </div>
                  </Dialog.Title>

                  <div className="min-h-0 overflow-y-auto flex-1">
                    <section className="w-full p-4 text-left">
                      <div className="mb-8 inline-flex items-center gap-1">
                        <span className="font-semibold text-sm">
                          Number of Coins
                        </span>
                        <svg
                          fill="currentColor"
                          font-size="12px"
                          viewBox="0 0 48 48"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                        >
                          <path d="m24 28.75 13.67-13.67a1 1 0 0 1 1.41 0l1.84 1.84a1 1 0 0 1 0 1.41L24.71 34.54a1 1 0 0 1-1.42 0L7.1 18.34a1 1 0 0 1 0-1.42l1.83-1.84a1 1 0 0 1 1.41 0L24 28.75Z"></path>
                        </svg>
                      </div>
                      <div className="flex items-center h-12 w-full border border-[rgba(22,24,35,.12)] p-3 mb-1 rounded-sm">
                        <svg
                          font-size="16px"
                          viewBox="0 0 48 48"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                        >
                          <circle
                            cx="24"
                            cy="24"
                            r="22"
                            fill="#FFEC9B"
                          ></circle>
                          <circle
                            cx="24"
                            cy="24"
                            r="17"
                            fill="#FACE15"
                          ></circle>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M40.93 25.5a17 17 0 1 0-33.87 0 17 17 0 0 1 33.87 0Z"
                            fill="#FABC15"
                          ></path>
                          <path
                            d="M33 19a5.03 5.03 0 0 1-5.06-5h-3.38v13.61a3.07 3.07 0 0 1-3.1 3.06c-1.7 0-3.09-1.37-3.09-3.06a3.07 3.07 0 0 1 3.94-2.94v-3.4A6.43 6.43 0 0 0 15 27.6c0 3.54 2.9 6.4 6.47 6.4a6.43 6.43 0 0 0 6.47-6.39v-6.94A8.47 8.47 0 0 0 33 22.33V19Z"
                            fill="#FEF5CD"
                          ></path>
                        </svg>
                        <div className="font-bold text-xl">
                          <div className="ePJla-D">
                            <input
                              placeholder="30 - 2,500,000"
                              className="eVvRjh"
                            />
                            <span className="bVKQAh"></span>
                            <div className="cfsGIz ms-0"></div>
                          </div>
                        </div>
                      </div>
                    </section>
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
