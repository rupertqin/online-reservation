import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonPicker, IonPickerColumn} from '@ionic/react';
import Steps from '@/components/Steps';

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

export default function Intro() {
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
          handler: (value) => {
            console.log(`Got Value ${value}`);
          }
        }
      ]}
      ></IonPicker>
  </div>
}


