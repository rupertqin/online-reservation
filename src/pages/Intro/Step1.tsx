import React from 'react';
import Steps from '@/components/Steps';

const wrapperStyle = {
  background: 'url(/img/引导页-对话页/引导页2背景.png) no-repeat 100%',
}


export default function Intro() {
  return <div style={wrapperStyle} className="page-intro">
    <Steps step={1} />
    <img src="/img/引导页-对话页/引导页-客服机器人.png" alt="" />
  </div>
}


