import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Steps from '@/components/Steps';
import { useRecoilState } from 'recoil';
import { introState } from './store';

const wrapperStyle = {
  background: 'url(/img/引导页2/bg.png) top/100% no-repeat',
}

export default function Step5() {
  const history = useHistory();
  const [intro, setIntro] = useRecoilState(introState);
  const [name, setName] = useState(" ");

  const handleInput = event => {
    setName(event.target.value);
  };

  function onSubmit() {
    setIntro({ ...intro, step5: name })
    setTimeout(() => {
      history.push('/intro/step/analyzing')
    }, 0)
  }

  return <div style={wrapperStyle} className="page-intro steps step5">
    <div>
      <Steps step={5} />
      <img src="/img/引导页2/引导页-客服机器人.png" alt="" />
      <img className="dialog" src="/img/引导页客服对话/引导页-对话框姓名.png" alt="" />
    </div>
    <footer>
      <ul>
        <li>取消</li>
        <li>姓名</li>
        <li onClick={onSubmit}>确定</li>
      </ul>
      <div>
        <input onChange={(event) => handleInput(event)} type="text"/>
      </div>
    </footer>
  </div>
}


