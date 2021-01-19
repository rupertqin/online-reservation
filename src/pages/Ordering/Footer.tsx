import React from 'react';
import { NavLink } from "react-router-dom";

export default function Footer() {
  const sumup = 0
  const sumupKcal = 0

  return <footer className="footer">
    <div className="left">
      <img src="/img/订餐页面-按钮/订餐-购物车图标灰.png" alt=""/>
      <span className="unit">¥</span>
      <span className="sumup">{sumup}</span>
    </div>
    <div className="right">
      <span className="sumup-kcal">{sumupKcal}</span>
      <span className="unit">Kcal</span>
      <button>去结算</button>
    </div>
  </footer>
}
