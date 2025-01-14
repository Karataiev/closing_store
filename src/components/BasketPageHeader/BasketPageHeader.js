import React from "react";
import "./BasketPageHeader.scss";
import backBtn from "../../assets/icons/back-btn.png";
import { Link } from "react-router-dom";

export const BasketPageHeader = () => {
  return (
    <div className="basketPageHeader">
      <Link to={"/"} className="backBtn">
        <img src={backBtn} alt="back_btn" />
      </Link>
      <span className="basketPageTitle">Кошик</span>
    </div>
  );
};
