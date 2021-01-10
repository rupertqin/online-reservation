import React from 'react';
import Steps from '@/components/Steps';

const wrapperStyle = {
  background: 'url(/img/引导页2/bg.png) top/100% no-repeat',
}


export default function Intro() {
  return <div style={wrapperStyle} className="page-intro steps">
    <div>
      <Steps step={1} />
      <img src="/img/引导页2/引导页-客服机器人.png" alt="" />
      <img className="dialog" src="/img/引导页客服对话/引导页-对话框性别.png" alt="" />
    </div>
    <div>
      <h2>性别</h2>
    </div>
  </div>
}


