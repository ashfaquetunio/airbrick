import React from "react";
import DashboardItem from "./DashboardItem";

const DashboardCard = ({ data }) => {
  const { buttonText = '', header = {}, desc = '', entries = [], disabledButton } = data || {};
  return (
    <>
      <article className="db-card">
        <div className="db-card-h">
          <DashboardItem data={header} />
        </div>
        <div className="db-card-b">
          <p className="normal-para muted">{desc}</p>
          {entries.map((entry, index) => {
            return (
              <>
                <p className="normal-para d-flex pt-2 pt-md-3">
                  {entry.label}: <span className="fw-bold ms-auto">{index === 0 && '$'}{entry.value}</span>
                </p>
              </>
            );
          })}

          <div className="center-x pt-4">
            <button className={`button ${disabledButton && 'disabled'}`} >{buttonText}</button>
          </div>
        </div>
      </article>
    </>
  );
};

export default DashboardCard;
