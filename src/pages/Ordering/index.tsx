import React from 'react';
import { NavLink } from "react-router-dom";
import Card from './Card'
import Footer from './Footer'
import { times } from 'lodash'

const wrapperStyle = {
  background: 'url(/img/订餐菜单/订餐常规背景.png) top/100% no-repeat',
}
const cardStyle = {
  background: 'url(/img/订餐菜单/订餐-当日剩余框.png) 0px top / 100% no-repeat',
}

const kcalStyle = {
  background: 'url(/img/订餐菜单/订餐-剩余卡路里图标.png) 0px top / 100% no-repeat',
}

const types = [
  {
    label: '本周推荐',
    value: 0,
    active: true,
  },
  {
    label: '新品上市',
    value: 1,
  },
  {
    label: '本周推荐',
    value: 2,
  },
  {
    label: '本周推荐',
    value: 3,
  },
  {
    label: '本周推荐',
    value: 4,
  },
  {
    label: '本周推荐',
    value: 5,
  },
]

const dishes = times(10, () => ({
  name: "菜品名称",
  img: "https://www.ikea.cn/category-images/Category_Footstools-and-pouffes.jpg",
  tags: ["鸡肉","生菜","番茄","黄瓜"],
  weight: 124,
  kcal: 344,
  amount: 0,
}))

export default function Analyzing() {

  return <div className="page-index">
    <main className="content">
      <header style={wrapperStyle}>
        <div className="user">
          <div className="left">
            <img src="https://img2.doubanio.com/icon/u2814143-2.jpg" alt=""/>
            <div>
              <h1>dududdu</h1>
              <a href="/">个人中心</a>
            </div>
          </div>
          <div className="right">
            <img src="/img/订餐菜单/积分.png" alt=""/>
            <span>
              1234
              <small>分</small>
            </span>
          </div>
        </div>
        <div style={cardStyle} className="card">
          <div className="left">
            你的目标
            <h3>58 <small>kg</small></h3>
            当前摄入Kcal
            <h4><span className="purple">1579</span>  <small>(Kcal)</small></h4>
          </div>
          <div style={kcalStyle} className="right">
            剩余
            <h4>384</h4>
            本月建议Kcal
          </div>
        </div>
      </header>
      <div className="ordering-tab">
        <div className="ordering-tab-title">
          <ul>
            <li>
              <NavLink activeClassName="active" to="/ordering">菜单</NavLink>
            </li>
            <li>
              <NavLink to="/orders">历史订单</NavLink>
            </li>
          </ul>
          <div className="search">
            <img src="/img/订餐菜单/订餐-搜索-按钮(1).png" alt=""/>
            <button>搜索</button>
          </div>
        </div>
      </div>
      <div className="ordering-tab-content">
        <ul className="types">
          {
            types.map((type, idx) => <li key={idx} className={ type.active ? "active" : '' }>{ type.label }</li>)
          }
        </ul>
        <div className="dishes">
           {
            dishes.map((dish, idx) => <Card key={idx} data={dish}></Card>)
           } 
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
}


