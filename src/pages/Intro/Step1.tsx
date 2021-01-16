import React from 'react';
import { useHistory } from 'react-router-dom';
import Steps from '@/components/Steps';
import CompRadio from '../../components/CompRadio';
import { useRecoilState } from 'recoil';
import { introState } from './store';

const wrapperStyle = {
  background: 'url(/img/引导页2/bg.png) top/100% no-repeat',
}

const options = [
  {
    label: '男',
    value: 0,
  },
  {
    label: '女',
    value: 1,
  }
]

export default function Step1() {
  const history = useHistory();
  const [intro, setIntro] = useRecoilState(introState);
  function onSubmit(value: number) {
    setIntro({ ...intro, step1: value })
    setTimeout(() => {
      history.push('/intro/step/2')
    }, 0)
  }

  return <div style={wrapperStyle} className="page-intro steps step1">
    <div>
      <Steps step={1} />
      <img src="/img/引导页2/引导页-客服机器人.png" alt="" />
      <img className="dialog" src="/img/引导页客服对话/引导页-对话框性别.png" alt="" />
    </div>
    <div>
      <h2>性别</h2>
      <CompRadio options={options} onSubmit={onSubmit} ></CompRadio>
    </div>
  </div>
}


