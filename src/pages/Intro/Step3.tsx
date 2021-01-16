import React, { useState, useRef } from 'react';
import { IonDatetime, IonPickerColumn } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import Steps from '@/components/Steps';
import { useRecoilState } from 'recoil';
import { introState } from './store';

const wrapperStyle = {
  background: 'url(/img/引导页2/bg.png) top/100% no-repeat',
}

let isOpen = false;

export default function Step3() {
  const history = useHistory();
  const [intro, setIntro] = useRecoilState(introState);
  const dateRef = useRef<HTMLIonDatetimeElement>(null)
  const imgRef = useRef(null)

  function say() {
    if (dateRef.current && !isOpen) {
      dateRef.current.open();
      isOpen = true;
    }
  }
  setTimeout(say, 0)

  return <div style={wrapperStyle} className="page-intro steps step1">
    <div>
      <Steps step={3} />
      <img ref={imgRef} onClick={say} src="/img/引导页2/引导页-客服机器人.png" alt="" />
      <img className="dialog" src="/img/引导页客服对话/引导页-对话框出生.png" alt="" />
    </div>
    <IonDatetime
      ref={dateRef}
      displayFormat="YYYY-MM-DD" 
      pickerOptions={{
        showBackdrop: false,
        backdropDismiss: false,
      }}
      min="1994-03-14" 
      max="2012-12-09"
      value={intro.step3 || "2012-12-15"} 
      onIonChange={e => {
        setIntro({ ...intro, step3: e.detail.value })
        history.push('/intro/step/4')
      }}
      ></IonDatetime>
  </div>
}


