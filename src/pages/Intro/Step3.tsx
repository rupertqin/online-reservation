import React, { useState, useRef } from 'react';
import { IonDatetime, IonPickerColumn } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import Steps from '@/components/Steps';

const wrapperStyle = {
  background: 'url(/img/引导页2/bg.png) top/100% no-repeat',
}

export default function Intro() {
  const history = useHistory();
  const [selectedDate, setSelectedDate] = useState<string>('2012-12-15T13:47:20.789');
  const dateRef = useRef<HTMLIonDatetimeElement>(null)
  const imgRef = useRef(null)

  function say() {
    dateRef?.current?.open();
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
      value={selectedDate} 
      onIonChange={e => {
        setSelectedDate(e.detail.value!);
        history.push('/intro/step/4')
      }}
      ></IonDatetime>
  </div>
}


