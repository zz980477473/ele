import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '@/components/Footer';
import './user.scss'

class Com extends Component {
  register () {
    this.props.history.push('/login')
  }
  render () {
    return (
      <div className = "box">
        <header className = "header">
          <div className = "iconfont icon-zuojiantou"></div>
          <div className = "HCenter">我的</div>
        </header>
        <div className="content">
          <div className="userInfo" onClick={this.register.bind(this)}>
            <div className="pic">头像</div>
            <div className="info">
              <h1>登录/<span className="login">注册</span></h1>
              <div className="extra">
                <div className="iconfont icon-shouji"></div>
                登录后享受更多特权
              </div>
              <div className="iconfont icon-youjiantou"></div>
            </div>
          </div>
          <div className="mainInfo">
            <ul>
              <NavLink replace to = '/home'>
                <p className = "iconfont icon-qianbao"></p>
                钱包
              </NavLink>
              <NavLink replace to = '/kind'>
                <p className = "iconfont icon-hongbao1"></p>
                红包
                </NavLink>
              <NavLink replace to = '/cart'>
                <p className = "iconfont icon-qian"></p>
                金币
              </NavLink>
            </ul>
          </div>
          <div className="myLocation mainStyle">
            <div className="iconfont icon-dizhi font"></div>
            我的地址
            <div className="iconfont icon-youjiantou"></div>
          </div>
          <div className="mystore ">
            <div className="mainStyle">
              <div className="iconfont icon-jinbishangcheng font"></div>
              金币商城
              <div className="iconfont icon-youjiantou"></div>
            </div>
            <div className="mainStyle">
              <div className="iconfont icon-libao font"></div>
              分享拿10元现金
              <div className="iconfont icon-youjiantou"></div>
            </div>
          </div>
          <div className="mykefu ">
            <div className="mainStyle">
              <div className="iconfont icon-service font"></div>
              我的客服
              <div className="iconfont icon-youjiantou"></div>
            </div>
            <div className="mainStyle">
              <div className="iconfont icon-xiazai font"></div>
              下载饿了么APP
              <div className="iconfont icon-youjiantou"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Com
