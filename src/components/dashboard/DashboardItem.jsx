import React from 'react'

const DashboardItem = ({data = {}, bgIcon}) => {
  const {icon, value, label, simple} = data;
  return <>
  <div className="db-item">
    <div className={`${bgIcon && 'bg-icon'} icon`}>
      <img src={icon} alt="" />
    </div>
    <div >
      <p className="large-para">{!simple && '$'}{value}</p>
      <p className="small-para">{label}</p>
    </div>
  </div>
  </>
}

export default DashboardItem