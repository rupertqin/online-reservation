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
    label: '健康减重',
    value: 0,
  },
  {
    label: '维持平衡',
    value: 1,
  },
  {
    label: '随性所欲',
    value: 2,
  }
];

export default function Step4() {
  const history = useHistory();
  const [intro, setIntro] = useRecoilState(introState);

  function onSubmit(value: number) {
    setIntro({ ...intro, step4: value })
    setTimeout(() => {
      history.push('/intro/step/5')
    }, 0)
  }

  return <div style={wrapperStyle} className="page-intro steps step4">
    <div>
      <Steps step={4} />
      <img src="/img/引导页2/引导页-客服机器人.png" alt="" />
      <img className="dialog" src="/img/引导页客服对话/引导页-对话框目标.png" alt="" />
    </div>
    <div>
      <h2>单选</h2>
      <CompRadio options={options} onSubmit={onSubmit} ></CompRadio>
    </div>
  </div>
}


