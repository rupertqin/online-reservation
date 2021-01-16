import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonPicker, IonPickerColumn} from '@ionic/react';
import Steps from '@/components/Steps';
import { useRecoilState } from 'recoil';
import { introState } from './store';

const wrapperStyle = {
  background: 'url(/img/引导页2/bg.png) top/100% no-repeat',
}

export default function Step2() {
  const history = useHistory();
  const [intro, setIntro] = useRecoilState(introState);

  function onSubmit(value) {
    setIntro({ ...intro, step2: value })
    history.push('/intro/step/3')
  }

  return <div style={wrapperStyle} className="page-intro steps step1">
    <div>
      <Steps step={2} />
      <img src="/img/引导页2/引导页-客服机器人.png" alt="" />
      <img className="dialog" src="/img/引导页客服对话/引导页-对话框体重.png" alt="" />
    </div>
    <IonPicker
      isOpen={true}
      showBackdrop={false}
      backdropDismiss={false}
      columns={[{
        name: "weight",
        options: [...Array(120).keys()].map(i =>({ text: String(i + 80), value: i + 200 })),
      }, {
        name: "unit",
        options: [
          {
            text: 'kg',
            value: 0,
          },
          {
            text: 'g',
            value: 1,
          }
        ]
      }]} 
      buttons={[
        {
          text: '',
        },
        {
          text: '体重',
        },
        {
          text: '确定',
          handler: onSubmit,
        }
      ]}
      ></IonPicker>
  </div>
}


