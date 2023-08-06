import React from "react";
import { BsArrowRight } from "react-icons/bs";

const FarmCard = ({ xDirection, data }) => {
  const { icons, title, valueLeft, valueRight, buttonText, feature, linkTextL, linkTextR } =
    data;
  return (
    <>
      <article className={`${xDirection && 'shrink'} farm-card h-100`}>
        <div className="farm-card-cover"></div>
        <div className="farm-card-body">
          <div className="farm-card-icons">
            {icons?.map((icon) => {
              return (
                <>
                  <img src={`${icon}`} className="large-icon" alt="" />
                </>
              );
            })}
          </div>
          <div className={`${xDirection && "flex-row"} card-direction`}>
            <p
              className={`${
                xDirection && "expandable text-start fw-bold"
              } normal-para`}
            >
              {title}
            </p>
            <div className="">
              <p className="main-title d-inline py-2">{valueLeft.toFixed(3)}</p>
              <p className="normal-para pb-2">= ${valueRight.toFixed(2)}</p>
            </div>
          </div>
          <button className="button">{buttonText}</button>
          <p className="normal-para pt-2 muted-dark">{feature}</p>
          <p className="normal-para orange underline py-2">
            <span className="d-block">{linkTextL}</span>
            {linkTextR} {linkTextL && <BsArrowRight />}
          </p>
        </div>
      </article>
    </>
  );
};

export default FarmCard;
