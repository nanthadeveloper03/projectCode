import React from 'react';
import Link from "next/link";
import { useState, useEffect } from 'react';
import SliderWithStep from '@/components/sections/convert/SliderWithStep';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './slider.css';

const BuySell = ({tabs}) => {

  const [flatTabs, setFlatTabs] = useState(1);
  const [flatTabs1, setFlatTabs1] = useState(1);
  const [flatTabs2, setFlatTabs2] = useState(1);

  useEffect(() => {
    // initial active tab based on the tabs prop and window width
    if (window.innerWidth <= 767) {
      setFlatTabs(tabs === 1 ? 1 : 2);
    }
  }, [tabs]);

  // Handling the main Buy/Sell tab switch
  const handleFlatTabs = (index) => {
    setFlatTabs(index);
  };
  const handleFlatTabs1 = (index) => {
    setFlatTabs1(index)
  }
  const handleFlatTabs2 = (index) => {
    setFlatTabs2(index)
  }

// Function to return tooltip text based on the active sub-tab and main tab
const getTooltipText = () => {
  if (flatTabs === 1) {
    // Buy tab is active
    return flatTabs1 === 1
      ? "Market Order: Buys or sells at the current market price."
      : "Limit Order: Sets a price at which to buy or sell.";
  } else if (flatTabs === 2) {
    // Sell tab is active
    return flatTabs2 === 1
      ? "Market Order: Buys or sells at the current market price."
      : "Limit Order: Sets a price at which to buy or sell.";
  }
  return "Default Tooltip Text";
};

// Render Tooltip component
const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    {getTooltipText()}
  </Tooltip>
);

  return (
    <>
      <div className='market_tsc3'>
        <div className='trade_tab1'>

          <ul className="menu-tabtrd1 d-flex justify-content-evenly">
            <li className={flatTabs === 1 ? "active" : ""} onClick={() => handleFlatTabs(1)}><Link href="javascript:;">Buy</Link></li>
            <li className={flatTabs === 2 ? "active" : ""} onClick={() => handleFlatTabs(2) }><Link href="javascript:;">Sell</Link></li>
          </ul>

          <div className="content-tabrd">

            <div className="content-inner" style={{ display: `${flatTabs === 1 ? "block" : "none"}` }}>

              <ul className='d-flex justify-content-evenly gap-3 ord_lis2'>
                <li className={flatTabs1 === 1 ? "active" : ""} onClick={() => handleFlatTabs1(1)}>
                  <button type='button' className='btn def_btn'>Market</button>
                </li>
                <li className={flatTabs1 === 2 ? "active" : ""} onClick={() => handleFlatTabs1(2)}>
                  <button type='button' className='btn def_btn'>Limit</button>
                </li>
                <li>
                  <OverlayTrigger
                    placement="top"
                    overlay={renderTooltip} // Conditional tooltip based on active tab
                  >
                    <button type='button' className='btn def_btn'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                      </svg>
                    </button>
                  </OverlayTrigger>
                </li>
              </ul>

              <div className="content-inner" style={{ display: `${flatTabs1 === 1 ? "block" : "none"}` }}>
                <form className='trd_form1'>
                  <div className='form-group'>
                    <div className='input-group cm_tinpgrp1 disabled_grp flex-nowrap'>
                      <span className='input-group-text'>
                        Price
                      </span>
                      <input type='text' className='form-control' placeholder='59473' disabled />
                      <span className='input-group-text fw700'>
                        USDT
                      </span>
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='input-group cm_tinpgrp1 flex-nowrap'>
                      <span className='input-group-text'>
                        Amount
                      </span>
                      <input type='text' className='form-control' placeholder='' />
                      <span className='input-group-text fw700'>
                        BTC
                      </span>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between w-100 avail_bk1'>
                    <span className='avail_t1'>Available</span>
                    <Link href="/deposit"><span className='avail_t2'>--USDT <img src='/assets/images/trade/plus.png' className='avail_ico' /> </span></Link>
                  </div>
                  <SliderWithStep />
                  <div className='form-group'>
                    <div className='input-group cm_tinpgrp1 flex-nowrap'>
                      <span className='input-group-text'>
                        Total
                      </span>
                      <input type='text' className='form-control' placeholder='' />
                      <span className='input-group-text'>
                        USDT
                      </span>
                    </div>
                  </div>
                  <div className='form-group'>
                    <button type="button" className="btn btn-success text-white w-100">Buy</button>
                  </div>
                  <span>Maker fee : 10 %</span> <span>Taker fee : 15 %</span>
                </form>
              </div>

              <div className="content-inner" style={{ display: `${flatTabs1 === 2 ? "block" : "none"}` }}>
                <form className='trd_form1'>
                  <div className='form-group'>
                    <div className='input-group cm_tinpgrp1 flex-nowrap'>
                      <span className='input-group-text'>
                        Price
                      </span>
                      <input type='text' className='form-control' placeholder='59473' />
                      <span className='input-group-text fw700'>
                        USDT
                      </span>
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='input-group cm_tinpgrp1 flex-nowrap'>
                      <span className='input-group-text'>
                        Amount
                      </span>
                      <input type='text' className='form-control' placeholder='0.00' />
                      <span className='input-group-text fw700'>
                        BTC
                      </span>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between w-100 avail_bk1'>
                    <span className='avail_t1'>Available</span>
                    <Link href="/deposit"><span className='avail_t2'>--USDT <img src='/assets/images/trade/plus.png' className='avail_ico' /> </span></Link>
                  </div>
                  <SliderWithStep />
                  <div className='form-group'>
                    <div className='input-group cm_tinpgrp1 flex-nowrap'>
                      <span className='input-group-text'>
                        Total
                      </span>
                      <input type='text' className='form-control' placeholder='' />
                      <span className='input-group-text'>
                        USDT
                      </span>
                    </div>
                  </div>
                  <div className='form-group'>
                  <button type="button" className="btn btn-success text-white w-100">Buy</button>
                  </div>
                  <span>Maker fee : 10 %</span> <span>Taker fee : 15 %</span>
                </form>                
              </div>

            </div>

            <div className="content-inner" style={{ display: `${flatTabs === 2 ? "block" : "none"}` }}>

              <ul className='d-flex justify-content-evenly gap-3 ord_lis2'>
                <li className={flatTabs2 === 1 ? "active" : ""} onClick={() => handleFlatTabs2(1)}>
                  <button type='button' className='btn def_btn'>Market</button>
                </li>
                <li className={flatTabs2 === 2 ? "active" : ""} onClick={() => handleFlatTabs2(2)}>
                  <button type='button' className='btn def_btn'>Limit</button>
                </li>
                <li>
                  <OverlayTrigger
                    placement="top"
                    overlay={renderTooltip} // Conditional tooltip based on active tab
                  >
                    <button type='button' className='btn def_btn'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                      </svg>
                    </button>
                  </OverlayTrigger>
                </li>
              </ul>

              <div className="content-inner" style={{ display: `${flatTabs2 === 1 ? "block" : "none"}` }}>
                <form className='trd_form1'>
                  <div className='form-group'>
                    <div className='input-group cm_tinpgrp1 disabled_grp flex-nowrap'>
                      <span className='input-group-text'>
                        Price
                      </span>
                      <input type='text' className='form-control' placeholder='' disabled />
                      <span className='input-group-text fw700'>
                        USDT
                      </span>
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='input-group cm_tinpgrp1 flex-nowrap'>
                      <span className='input-group-text'>
                        Amount
                      </span>
                      <input type='text' className='form-control' placeholder='' />
                      <span className='input-group-text fw700'>
                        BTC
                      </span>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between w-100 avail_bk1'>
                    <span className='avail_t1'>Available</span>
                    <Link href="/deposit"><span className='avail_t2'>--USDT <img src='/assets/images/trade/plus.png' className='avail_ico' /> </span></Link>
                  </div>
                  <SliderWithStep />
                  <div className='form-group'>
                    <div className='input-group cm_tinpgrp1 flex-nowrap'>
                      <span className='input-group-text'>
                        Total
                      </span>
                      <input type='text' className='form-control' placeholder='' />
                      <span className='input-group-text'>
                        USDT
                      </span>
                    </div>
                  </div>
                  <div className='form-group'>
                  <button type="button" className="btn btn-danger text-white w-100">Sell</button>
                  </div>
                  <span>Maker fee : 10 %</span> <span>Taker fee : 15 %</span>
                </form>                
              </div>

              <div className="content-inner" style={{ display: `${flatTabs2 === 2 ? "block" : "none"}` }}>
                <form className='trd_form1'>
                  <div className='form-group'>
                    <div className='input-group cm_tinpgrp1 flex-nowrap'>
                      <span className='input-group-text'>
                        Price
                      </span>
                      <input type='text' className='form-control' placeholder='59473' />
                      <span className='input-group-text fw700'>
                        USDT
                      </span>
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='input-group cm_tinpgrp1 flex-nowrap'>
                      <span className='input-group-text'>
                        Amount
                      </span>
                      <input type='text' className='form-control' placeholder='' />
                      <span className='input-group-text fw700'>
                        BTC
                      </span>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between w-100 avail_bk1'>
                    <span className='avail_t1'>Available</span>
                    <Link href="/deposit"><span className='avail_t2'>--USDT <img src='/assets/images/trade/plus.png' className='avail_ico' /> </span></Link>
                  </div>
                  <SliderWithStep />
                  <div className='form-group'>
                    <div className='input-group cm_tinpgrp1 flex-nowrap'>
                      <span className='input-group-text'>
                        Total
                      </span>
                      <input type='text' className='form-control' placeholder='' />
                      <span className='input-group-text'>
                        USDT
                      </span>
                    </div>
                  </div>
                  <div className='form-group'>
                  <button type="button" className="btn btn-danger text-white w-100">Sell</button>
                  </div>
                  <span>Maker fee : 10 %</span> <span>Taker fee : 15 %</span>
                </form>                
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuySell;
