import React, { useState } from 'react'
import PrimarySelector from '../others/PrimarySelector'

const selectorData = [
  {
    label: 'Crypto',
    icon: 'assets/images/bitcoin_icon.svg'
  },
  {
    label: 'MyUSD',
    icon: 'assets/images/usd_badge.svg'
  },
  {
    label: 'BUSD',
    icon: 'assets/images/busd_icon.svg'
  },
  {
    label: 'BNB',
    icon: 'assets/images/bnb_icon.svg'
  },
]

const BuyCard = () => {
  const [selection, setSelection] = useState(selectorData[0])

  const handleSelection = (entry) => {
    setSelection(entry);
  };

  return <>
    <article className="buy-card bg-light-transparent primary-border-radius">
        <div className="buy-card-h bg-white p-3">
            <div className="flex-wrap-items shrink justify-content-center">
                <img src="assets/images/my_rocks_icon.svg" alt="my rock icon" className="icon" />
                <p className="large-para text-center">Buy ROCKS</p>
            </div>
        </div>
        <div className="buy-card-body d-flex flex-column align-items-center py-3">
            <PrimarySelector className="w-75" data={selectorData} selection={selection} handleSelection={handleSelection}/>
            <p className="my-4 main-title text-center">$0.010</p>
            <button className="button w-75 text-center">Approve</button>
        </div>
    </article>
  </>
}

export default BuyCard