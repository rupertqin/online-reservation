import './style.scss';

const wrapperStyle = {
  background: 'url(/img/引导页1/引导页背景.png) no-repeat 100%',
  overflow: 'hidden',
}

const imgStyle = {
  // width: `${703/2}px`,
}

const img2Style = {
  // width: `${648/2}px`,
}

const textStyle = {
  color: 'rgb(142	166	167	)',
}

export default function Intro() {
  return <div style={wrapperStyle} className="page-intro">
    <div>
      <img style={imgStyle} src="/img/引导页1/引导页1-厨师机器人.png" alt="" />
      <h2 style={textStyle}>Hi,我是XXX</h2>
      <img style={img2Style} src="/img/引导页1/引导页1-文字框.png" alt="" />
    </div>
  </div>
}