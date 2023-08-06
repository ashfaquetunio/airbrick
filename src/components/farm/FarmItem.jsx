import React from 'react'

const FarmItem = ({value,label,unit}) => {
  return <>
    <div className="farm-item h-100">
        <p className="large-para">{value}<span>{unit}</span></p>
        <p className="normal-para">{label}</p>
    </div>
  </>
}

export default FarmItem