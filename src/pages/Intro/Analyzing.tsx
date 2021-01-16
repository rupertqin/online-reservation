import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { introState } from './store';

const wrapperStyle = {
  background: 'url(/img/引导页数据值页面/数据值-进度背景.png) top/100% repeat',
}
const robotWrapperStyle = {
  background: 'url(/img/引导页数据值页面/数据读取-半透明圆图.png) top/100% repeat',
}

const analyzingSteps = [
  {
    percent: 50,
    img: "/img/引导页数据值页面/引导页-进度-分析饮食.png"
  },
  {
    percent: 99,
    img: "/img/引导页数据值页面/引导页-进度-制定目标.png"
  },
  {
    percent: 100,
    img: "/img/引导页数据值页面/引导页-进度-定制完成.png"
  },
]

export default function Analyzing() {
  const history = useHistory();
  const [percent, setPercent] = useState(0);
  const [img, setImg] = useState(analyzingSteps[0].img);


  function onSuccess() {
    setTimeout(() => {
      history.push('/intro/step/success')
    }, 2000)
  }

  useEffect(() => {
    for (const step of analyzingSteps) {
      if (percent <= step.percent) {
        setImg(step.img)
        break;
      }
    }
  }, [percent]);

  useEffect(() => {
    if (percent >= 100) {
      return onSuccess()
    };
    var timerID = setInterval( () => {
      tick()
      
    }, 50 );

    return function cleanup() {
        clearInterval(timerID);
      };
  });

  function tick() {
    setPercent(percent + 1)
  }

  return <div style={wrapperStyle} className="page-intro analyzing">
    <p>根据你的目标，智慧餐厅正在为您定制中。。。</p>
    <div className="robot-wrapper" style={robotWrapperStyle}>
      <img className="robot" src="/img/引导页数据值页面/引导页-进度-机器人.png" alt="" />
    </div>
    <div className="percantage">
      {percent}%
    </div>
    <div>
      <img src={img} alt=""/>
    </div>
  </div>
}


