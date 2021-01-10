import React from 'react';
import { Link } from "react-router-dom";
import './style.scss';

const wrapperStyle = {
  background: 'url(/img/引导页1/引导页背景.png) top/100% repeat',
}

const imgStyle = {
  // width: `${703/2}px`,
}

const img2Style = {
  // width: `${648/2}px`,
}

const textStyle = {
  color: 'rgb(142	166	167	)',
}

export default function Intro() {
  return <div style={wrapperStyle} className="page-intro intro">
    <Link to="/intro/step/1">
      <img style={imgStyle} src="/img/引导页1/引导页1-厨师机器人.png" alt="" />
      <h2 style={textStyle}>Hi,我是XXX</h2>
      <img style={img2Style} src="/img/引导页1/引导页1-文字框.png" alt="" />
    </Link>
  </div>
}