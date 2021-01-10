import React, { useState } from 'react';

const styles = {
};

interface CommonOption {
  label: string;
  value: number|string;
}

interface Params {
  options: CommonOption[];
  onSubmit?: Function;
}

export default function Radio({options, onSubmit}: Params) {
  const [idx, setActiveIdx] = useState(0);

  return <div style={styles} className="comp-radio">
    <div className="list">
      {
        options.map((option, i) => {
          return (
            <button 
              onClick={(event: React.MouseEvent<HTMLElement>) => { setActiveIdx(i) }}
              key={option.value}
              className={idx === i ? 'active' : 'inactive'}>
              {option.label}
            </button>
          )
        })
      }
    </div>
    <button 
      onClick={(event: React.MouseEvent<HTMLElement>) => { onSubmit && onSubmit(idx) }}
      className="submit">
      确定
    </button>
  </div>
}