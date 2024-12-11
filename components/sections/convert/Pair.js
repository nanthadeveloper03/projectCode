import React from 'react';
import Link from "next/link";
import { useState } from 'react';

const Pair = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchQuery(value);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setIsSearchClicked(false);
  };

  const handleSearchClick = () => {
    setIsSearchClicked(true);
    setIsListVisible(true);
  };

  // search history list deleting
  const [isListVisible, setIsListVisible] = useState(true);
  const handleDelete = () => {
    setIsListVisible(false);
  };
  // search history list deleting  

  const [selectedCoinType, setSelectedCoinType] = useState('USDT');

  const coins1 = [
    { name1: '1000SATS/USDT', price: '0.0002893', change: '+0.70%' },
    { name1: '1INCH/USDT', price: '0.2376', change: '-0.42%' },
    { name1: '1MBABYDODGE/USDT', price: '0.0018328', change: '+110.57%' },
    { name1: 'AAVE/USDT', price: '140.14', change: '-0.36%' },
    { name1: 'ACA/USDT', price: '0.0569', change: '-4.05%' },
    { name1: 'ACE/USDT', price: '2.089', change: '-1.14%' },
    { name1: 'ACH/USDT', price: '0.01791', change: '-2.18%' },
    { name1: 'ACM/USDT', price: '1.389', change: '-0.79%' },
    { name1: 'ADA/USDT', price: '0.3328', change: '-0.18%' },
    { name1: 'ADX/USDT', price: '0.1366', change: '-4.07%' },
    { name1: 'AERGO/USDT', price: '0.0938', change: '-4.19%' },
    { name1: 'AEUR/USDT', price: '1.1128', change: '+0.26%' },
    { name1: '1000SATS/FDUSD', price: '0.0002893', change: '+0.70%' },
    { name1: '1INCH/FDUSD', price: '0.2376', change: '-0.42%' },
    { name1: '1000SATS/USDC', price: '0.0002893', change: '+0.70%' },
    { name1: '1INCH/USDC', price: '0.2376', change: '-0.42%' },
    { name1: '1000SATS/TUSD', price: '0.0002893', change: '+0.70%' },
    { name1: '1INCH/TUSD', price: '0.2376', change: '-0.42%' },
    { name1: '1000SATS/BNB', price: '0.0002893', change: '+0.70%' },
    { name1: '1INCH/BNB', price: '0.2376', change: '-0.42%' },
  ];

  const filteredCoins = coins1.filter(coin =>
    coin.name1.toLowerCase().includes(searchQuery) && coin.name1.includes(selectedCoinType)
  );

  const coins = [
    { id: 1, name: 'USDT' },
    { id: 2, name: 'FDUSD' },
    { id: 3, name: 'USDC' },
    { id: 4, name: 'TUSD' },
    { id: 5, name: 'BNB' },
    { id: 6, name: 'USDC' },
    { id: 7, name: 'TUSD' },
    { id: 8, name: 'BNB' },
  ];

  const [visibleStart, setVisibleStart] = useState(0);
  const visibleCount = 5;

  const handleNext = () => {
    if (visibleStart + visibleCount < coins.length) {
      setVisibleStart(visibleStart + visibleCount);
    }
  };

  const handlePrev = () => {
    if (visibleStart > 0) {
      setVisibleStart(visibleStart - visibleCount);
    }
  };

  const handleCoinTypeClick = (coinType) => {
    setSelectedCoinType(coinType);
    setVisibleStart(0);
  };


  return (
    <>
      <div className='market_tsc4'>

        <div className='search_area1'>
          <div className='input-group cm_tinpgrp2 flex-nowrap'>
            <span className='input-group-text'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </span>
            <input type='text' className='form-control' placeholder='Search' value={searchQuery} onChange={handleSearchChange} onClick={handleSearchClick} />
            {(searchQuery || isSearchClicked) && (
              <span className='input-group-text clear-btn' onClick={handleClearSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </span>
            )}
          </div>
        </div>

        {isSearchClicked && !searchQuery && (
          <div className='search_enter'>
            <div className='sort_body d-flex flex-column w-100'>
              {isListVisible && (
                <>
                  <h4 className='seh_tx1 d-flex justify-content-between w-100 align-items-center'>
                    Search History
                    <button type='button' className='btn del_btn1' onClick={handleDelete}>
                      <img src='/assets/images/trade/delete.png' className='img-fluid' />
                    </button>
                  </h4>
                  <div className='ser_rw'>
                    <div className='sort_rw d-flex align-items-center w-100'>
                      <div className='sfd1 symbol-pair'>                        
                        <span className='trd_ptx1'>AAVE/USDT</span>
                      </div>
                      <div className='sfd2 market-price'>
                        <span className='trd_ptx1'>100 USDT</span>
                      </div>
                      <div className='sfd2 market-change'>
                        <span className="trd_ptx1">
                          100 %
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {!searchQuery && (
                <>
                  <h4>Top Search</h4>
                  {filteredCoins.map((coin, index) => (
                    <div key={index} className='sort_rw d-flex align-items-center w-100'>
                      <div className='sfd1 symbol-pair'>                        
                        <span className='trd_ptx1'>{coin.name1}</span>
                      </div>
                      <div className='sfd2 market-price'>
                        <span className='trd_ptx1'>{coin.price}</span>
                      </div>
                      <div className='sfd2 market-change'>
                        <span className={`trd_ptx1 ${+coin.change >= 0 ? 'text-success' : 'text-danger'}`}>
                          {coin.change} %
                        </span>
                      </div>
                    </div>

                  ))}
                </>
              )}

            </div>
          </div>
        )}

        {(!isSearchClicked || searchQuery !== '') && (

          <div className='search_leave'>
            <div className="coin-list-container">
              <ul className="d-flex flex-wrap gap-3 scoin_lis1">
                {coins.slice(visibleStart, visibleStart + visibleCount).map((coin) => (
                  <li key={coin.id} onClick={() => handleCoinTypeClick(coin.name)} className={coin.name === selectedCoinType ? 'active' : ''}>
                    <Link href="#">{coin.name}</Link>
                  </li>
                ))}
              </ul>

              {visibleStart > 0 && (
                <button className="btn prevbtn" onClick={handlePrev}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                  </svg>
                </button>
              )}

              <button className="btn nexbtn" onClick={handleNext} disabled={visibleStart + visibleCount >= coins.length}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5 12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                </svg>
              </button>
            </div>

            <div className='coinpairsc'>
              <div className='sort_hd d-flex align-items-center w-100'>
                <div className='sfd1'>
                  <span className='trd_ptx1 d-flex'>Pair
                    <span className='sort_ico d-flex justify-content-between flex-column'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                      </svg>
                    </span>
                  </span>
                </div>
                <div className='sfd2 d-inline-flex align-items-center justify-content-end'>
                  <span className='trd_ptx1 d-flex'>Last Price
                    <span className='sort_ico d-flex justify-content-between flex-column'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                      </svg>
                    </span>
                  </span>
                  <span className='sep_lin'>/</span>
                  <span className='trd_ptx1 d-flex'>24h Change
                    <span className='sort_ico d-flex justify-content-between flex-column'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                      </svg>
                    </span>
                  </span>
                  <span className='trd_exc'>
                    <img src='/assets/images/trade/exchange.png' className='img-fluid' />
                  </span>
                </div>
              </div>

              <div className='sort_body d-flex flex-column w-100'>
                {filteredCoins.length > 0 ? (
                  filteredCoins.map((coin, index) => (
                    <div key={index} className='sort_rw d-flex align-items-center w-100'>
                      <div className='sfd1 symbol-pair'>                        
                        <span className='trd_ptx1'>{coin.name1}</span>                        
                      </div>
                      <div className='sfd2 market-price'>
                        <span className='trd_ptx1'>{coin.price}</span>
                      </div>
                      <div className='sfd2 market-change'>
                        <span className={`trd_ptx1 ${coin.change.startsWith('+') ? 'text-success' : 'text-danger'}`}>
                          {coin.change}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className='no-results'>No results found</div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
};

export default Pair;
