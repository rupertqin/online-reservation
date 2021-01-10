import React from 'react';

export default function Steps({step}: {step: number}) {
  return <ul className="steps">
    {[1,2,3,4,5].map( i => {
      return <li key={i}>
        {
          i <= step
            ? <img src="/img/引导页-对话页/引导页-进度-完成条.png" alt="" />
            : <img src="/img/引导页-对话页/引导页-进度-未完成条.png" alt="" />
        }
      </li>
    })}
  </ul>
}