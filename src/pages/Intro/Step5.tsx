import React from 'react';
import { useHistory } from 'react-router-dom';
import Steps from '@/components/Steps';

const wrapperStyle = {
  background: 'url(/img/引导页2/bg.png) top/100% no-repeat',
}

export default function Intro() {
  const history = useHistory();

  function onSubmit(value: number) {
    history.push('/intro/step/5')
  }

  return <div style={wrapperStyle} className="page-intro steps step4">
    <div>
      <Steps step={2} />
      <img src="/img/引导页2/引导页-客服机器人.png" alt="" />
      <img className="dialog" src="/img/引导页客服对话/引导页-对话框姓名.png" alt="" />
    </div>
    <div>
      <h2>单选</h2>
    </div>
  </div>
}


