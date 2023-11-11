"use client"

import Image from 'next/image';
import visa from './_assets/visa.png'
import mastercard from './_assets/mastercard.png'
import american_express from './_assets/american_express.png'
import jcb from './_assets/jcb.png'
import diners from './_assets/diners.png'
import maestro from './_assets/maestro.png'
import paypal from './_assets/paypal.png'
import { useState } from 'react';
import CustomModal from './_components/CustomModal';


const Home = () => {
  const [priceList, setPriceList] = useState([
    {
      id: 1,
      coin: '70',
      dollar: '0.74'
    },
    {
      id: 2,
      coin: '350',
      dollar: '3.7'
    },
    {
      id: 3,
      coin: '700',
      dollar: '7.4'
    },
    {
      id: 4,
      coin: '1,400',
      dollar: '14.8'
    },
    {
      id: 5,
      coin: '3,500',
      dollar: '37'
    },
    {
      id: 6,
      coin: '7,000',
      dollar: '74'
    },
    {
      id: 7,
      coin: '17,500',
      dollar: '185'
    },
    {
      id: 8,
      coin: 'Custom',
      dollar: 'Large amount supported'
    },
  ])
  const [total, setTotal] = useState('')
  const [customModalState, setCustomModalState] = useState(false)

  const handleTotalChange = (item) => {
    if(item.id !== 8){
      setTotal(item.dollar)
    } else {
      setCustomModalState(true)
    }
  }

  const closeCustomModal = () => setCustomModalState(false)


  return (
    <div className="DivLayoutContainer">
      <header className="HeaderLayout">
        <div className="DivBackButton">
          <svg
            className="tiktok-m8n5x3-StyledArrowIcon e1t7jvfs7"
            width="1em"
            data-e2e=""
            height="1em"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.58579 22.5858L20.8787 6.29289C21.2692 5.90237 21.9024 5.90237 22.2929 6.29289L23.7071 7.70711C24.0976 8.09763 24.0976 8.7308 23.7071 9.12132L8.82843 24L23.7071 38.8787C24.0976 39.2692 24.0976 39.9024 23.7071 40.2929L22.2929 41.7071C21.9024 42.0976 21.2692 42.0976 20.8787 41.7071L4.58579 25.4142C3.80474 24.6332 3.80474 23.3668 4.58579 22.5858Z"
            ></path>
          </svg>
        </div>
        <div className="DivLayoutTitle">Get Coins</div>
        <div className="DivExtraButton">
          <div className="flex items-center">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 21"
                width="1em"
                height="1em"
                className="tiktok-1i6s8qb-StyledTransactionHistoryIcon e1xyt5ek3"
              >
                <path
                  fill="black"
                  fillRule="evenodd"
                  d="M.25 2a2 2 0 012-2h12a2 2 0 012 2v3a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V2h-12v14h3a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-3a2 2 0 01-2-2V2zM14 9a5 5 0 100 10 5 5 0 000-10zm-7 5a7 7 0 1114 0 7 7 0 01-14 0zm10.41-2.386c-.831 0-1.446-.643-1.446-1.364h-2v4.826c0 .34-.296.674-.732.674s-.732-.334-.732-.674.296-.675.732-.675v-2c-1.477 0-2.732 1.166-2.732 2.675 0 1.508 1.255 2.674 2.732 2.674 1.477 0 2.732-1.166 2.732-2.674v-1.773c.442.2.932.31 1.445.31v-2zM4.5 5.5A.5.5 0 015 5h4.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5v-1zM5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1A.5.5 0 006 9H5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </header>

      <main className="DivLayoutEntity">
        <div className="DivBannerWrapper">
          <div className="DivProfileInfoWrapper">
            <div className="DivProfileNameCoinInfo">
              <div
                aria-haspopup="true"
                aria-controls
                className="DivProfileImage"
                role="button"
              ></div>
              <div className="DivNameCoinInfo">
                <p className="NameInfo">Anonymous</p>
                <div className="DivCoinInfo">
                  <svg
                    className="StyledCoinIcon "
                    width="1em"
                    data-e2e=""
                    height="1em"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="24" cy="24" r="22" fill="#FFEC9B"></circle>
                    <circle cx="24" cy="24" r="17" fill="#FACE15"></circle>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M40.9347 25.5C40.9779 25.0058 41 24.5055 41 24C41 14.6112 33.3888 7 24 7C14.6112 7 7 14.6112 7 24C7 24.5055 7.02206 25.0058 7.06527 25.5C7.82466 16.8137 15.1166 10 24 10C32.8834 10 40.1753 16.8137 40.9347 25.5Z"
                      fill="#FABC15"
                    ></path>
                    <path
                      d="M33 19C30.2041 19 27.9375 16.7614 27.9375 14H24.5625V27.6111C24.5625 29.2986 23.1774 30.6667 21.4688 30.6667C19.7601 30.6667 18.375 29.2986 18.375 27.6111C18.375 25.9236 19.7601 24.5556 21.4688 24.5556C21.722 24.5556 21.9659 24.5853 22.1981 24.6406C22.2365 24.6497 22.2747 24.6596 22.3125 24.6701V21.2763C22.0358 21.2406 21.7541 21.2222 21.4688 21.2222C17.8962 21.2222 15 24.0826 15 27.6111C15 31.1396 17.8962 34 21.4688 34C25.0413 34 27.9375 31.1396 27.9375 27.6111V20.6673C29.3477 21.7134 31.1005 22.3333 33 22.3333V19Z"
                      fill="#FEF5CD"
                    ></path>
                  </svg>
                  <span className="SpanCoinNum ">21</span>
                </div>
              </div>
            </div>
            <span className="SpanLogoutButton">
              <svg
                fill="currentColor"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
              >
                <path d="M34.96 9c1.05 0 1.91.86 1.91 1.92v26.16c0 1.06-.86 1.92-1.91 1.92h-9a.96.96 0 00-.96.96v2.08c0 .53.43.96.96.96H36.2a4.8 4.8 0 004.8-4.8V9.8A4.8 4.8 0 0036.2 5H25.96a.96.96 0 00-.96.96v2.08c0 .53.43.96.96.96h9z"></path>
                <path d="M12.8 15.65a.96.96 0 011.35 0l1.45 1.42a.96.96 0 01-.02 1.4L11.7 22h17.33c.53 0 .96.43.96.96v2.08c0 .53-.43.96-.96.96H11.71l3.94 4.04c.37.37.37.98-.01 1.35l-1.5 1.46a.96.96 0 01-1.33 0l-8.1-7.91a.96.96 0 010-1.38l8.1-7.9z"></path>
              </svg>
              <span className="SpanLogoutText ">Log out</span>
            </span>
          </div>
        </div>
        <div className="DivRechargeCoins">
          Recharge
          <span>
            <div className="DivRechargeAdvantageInfo">
              Save up to 31% compared to in-app purchase
              <div className="DivExplanationContainer">
                <svg
                  className="StyledExclamationMarkCircleIcon "
                  width="1em"
                  data-e2e=""
                  height="1em"
                  viewBox="0 0 48 48"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM27 16C27 17.6569 25.6569 19 24 19C22.3431 19 21 17.6569 21 16C21 14.3431 22.3431 13 24 13C25.6569 13 27 14.3431 27 16ZM23 22C22.4477 22 22 22.4477 22 23V34C22 34.5523 22.4477 35 23 35H25C25.5523 35 26 34.5523 26 34V23C26 22.4477 25.5523 22 25 22H23Z"
                  ></path>
                </svg>
              </div>
            </div>
          </span>
        </div>
        <div className="DivCoinsBkgContainer">
          <ol className="OlCoinsListContainer">
            {
              priceList.map(item => (
                <li key={item.id}>
                <button onClick={() => handleTotalChange(item)} className="ButtonSmCoinContainer">
                  <div className="DivSmCoinNumContainer">
                    <span className="SpanSmCoinNumIcon">
                      <svg
                        className="StyledSmCoinIcon "
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="24" cy="24" r="22" fill="#FFEC9B"></circle>
                        <circle cx="24" cy="24" r="17" fill="#FACE15"></circle>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M40.9347 25.5C40.9779 25.0058 41 24.5055 41 24C41 14.6112 33.3888 7 24 7C14.6112 7 7 14.6112 7 24C7 24.5055 7.02206 25.0058 7.06527 25.5C7.82466 16.8137 15.1166 10 24 10C32.8834 10 40.1753 16.8137 40.9347 25.5Z"
                          fill="#FABC15"
                        ></path>
                        <path
                          d="M33 19C30.2041 19 27.9375 16.7614 27.9375 14H24.5625V27.6111C24.5625 29.2986 23.1774 30.6667 21.4688 30.6667C19.7601 30.6667 18.375 29.2986 18.375 27.6111C18.375 25.9236 19.7601 24.5556 21.4688 24.5556C21.722 24.5556 21.9659 24.5853 22.1981 24.6406C22.2365 24.6497 22.2747 24.6596 22.3125 24.6701V21.2763C22.0358 21.2406 21.7541 21.2222 21.4688 21.2222C17.8962 21.2222 15 24.0826 15 27.6111C15 31.1396 17.8962 34 21.4688 34C25.0413 34 27.9375 31.1396 27.9375 27.6111V20.6673C29.3477 21.7134 31.1005 22.3333 33 22.3333V19Z"
                          fill="#FEF5CD"
                        ></path>
                      </svg>
                    </span>
                    <span className="SpanSmCoinNumDisplay">{item.coin}</span>
                  </div>
                  <div className="DivSmCoinTextContainer">
                    <div className="DivSmCoinTextNow">$ {item.dollar}</div>
                  </div>
                </button>
              </li>
              ))
            }
            
          </ol>
        </div>
        <div className="DivPaymentIconsRow">
        <Image height={14} width={22} src={visa} alt="Visa" className="ImgPaymentIcon " />
        <Image height={14} width={22} src={mastercard} alt="mastercard" className="ImgPaymentIcon " />
        <Image height={14} width={22} src={american_express} alt="american_express" className="ImgPaymentIcon " />
        <Image height={14} width={22} src={jcb} alt="jcb" className="ImgPaymentIcon " />
        <Image height={14} width={22} src={diners} alt="diners" className="ImgPaymentIcon " />
        <Image height={14} width={22} src={maestro} alt="maestro" className="ImgPaymentIcon " />
        <Image height={14} width={22} src={paypal} alt="paypal" className="ImgPaymentIcon " />
        </div>
      </main>

      <footer className="DivLayoutFooter">
        <div className="DivFooterContainer">
          <div className="DivCoinsTotalContainer">
            <div className="flex items-center gap-1">
              <span className="CoinsTotalText">Total</span>
            </div>
            <div>
              <span className="CoinsTotalAmount">$ {total}</span>
            </div>
          </div>
          <div className="DivButtonContainer">
            <button className="StyledQuestionButton">
              <span className="DivQuestionWrapper">
                <svg
                  className="tiktok-ybgbda-StyledQuestionIconWrapper e1xm5yq1"
                  width="1em"
                  data-e2e=""
                  height="1em"
                  viewBox="0 0 48 48"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM24.0909 15C22.172 15 20.3433 16.2292 19.2617 18.61C19.0332 19.1128 18.4726 19.4 17.9487 19.2253L16.0513 18.5929C15.5274 18.4182 15.2406 17.8497 15.4542 17.3405C16.9801 13.7031 20.0581 11 24.0909 11C28.459 11 32 14.541 32 18.9091C32 21.2138 30.7884 23.4606 29.2167 25.074C27.8157 26.5121 25.5807 27.702 22.9988 27.9518C22.4491 28.0049 22.0001 27.5523 22.0001 27V25C22.0001 24.4477 22.4504 24.0057 22.9955 23.9167C24.2296 23.7153 25.5034 23.1533 26.3515 22.2828C27.4389 21.1666 28 19.8679 28 18.9091C28 16.7502 26.2498 15 24.0909 15ZM24 36C22.3431 36 21 34.6569 21 33C21 31.3431 22.3431 30 24 30C25.6569 30 27 31.3431 27 33C27 34.6569 25.6569 36 24 36Z"
                  ></path>
                </svg>
              </span>
            </button>
            <button className="StyledBuyButton">Recharge</button>
          </div>
        </div>
      </footer>



      {/* custom modal container  */}
      <CustomModal 
        customModalState={customModalState}
        closeCustomModal={closeCustomModal}
      />
    </div>
  );
};

export default Home;






