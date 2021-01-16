import React from 'react';
import { useHistory } from 'react-router-dom';

const wrapperStyle = {
  background: 'url(/img/引导页数据值页面/数据值-进度背景.png) top/100% repeat',
}

export default function Analyzing() {
  const history = useHistory();

  function onConfirm() {
    setTimeout(() => {
      history.push('/intro/step/success')
    }, 0)
  }

  return <div style={wrapperStyle} className="page-intro success">
    <img src="/img/引导页结尾/引导页-完成-微笑机器人.png" alt=""/>
    <img src="/img/引导页结尾/引导页-完成-图.png" alt=""/>
    <img onClick={onConfirm} src="/img/引导页结尾/引导页-完成-指纹.png" alt=""/>
    <span>指纹确认</span>
  </div>
}


