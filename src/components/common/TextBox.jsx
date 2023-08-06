import React from 'react'

const TextBox = () => {
  return <>
  <div className="text-box">
    <p className="large-para pb-1 section-title fw-semibold">Boardroom Regulation</p>
    <p className="large-para muted-dark">EPOCH Duration: 8 Hours</p>
    <p className="normal-para muted-dark">Deposit / Withdrawals of ROCKS into/from he Boardroom will lock ROCKS for 6 epochs and MyUSD rewards for 3 epochs. MyUSD rewards claim will lock staked ROCKS for 6 epochs and next MyUSD rewards can only be claimed 3 epochs later.</p>
    <p className="normal-para fw-bold py-2 muted-dark"><a href="#">Learn More</a></p>
  </div>
  </>
}

export default TextBox