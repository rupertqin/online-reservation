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
      <Steps step={1} />
      <img src="/img/引导页2/引导页-客服机器人.png" alt="" />
      <img className="dialog" src="/img/引导页客服对话/引导页-对话框体重.png" alt="" />
    </div>
    <IonPicker
      isOpen={true}
      showBackdrop={false}
      backdropDismiss={false}
      columns={[{
        name: "1111111",
        options: [
          {
            text: 'ssss',
            value: 0,
          }
        ]
      }, {
        name: "2222222",
        options: [
          {
            text: 'ssss',
            value: 0,
          },
          {
            text: 'ddddddd',
            value: 0,
          }
        ]
      }]} 
      buttons={[
        {
          text: 'Cancel',
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


