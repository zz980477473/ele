import React, { Component } from 'react'
import './login.scss'

class Com extends Component {
  getBack () {
    console.log(this)
    this.props.history.goBack()
  }
  getPhone () {
    console.log(1111)
    let phoneNum = document.getElementById('phone')
    let getCode = document.querySelector('.getCode')
    let val = phoneNum.value
    val.length >= 11 ? phoneNum.value=val.substr(0, 11) : phoneNum.value=val
    let reg = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/
    if(reg.test(phoneNum.value)) {
      getCode.style.color = '#6bb8ff'
    } else {
      getCode.style.color = '#ccc'
    }
  }
  getCode () {
    let Code = document.querySelector('.getCode')
    if (Code.style.color === 'rgb(107, 184, 255)') {
      console.log('可以点击')
    }
  }
  render () {
    return (
      <div className="box">
        <div className="logHeader">
          <div className="iconfont icon-zuojiantou" onClick={this.getBack.bind(this)}></div>
        </div>
        <div className="content">
          <div className="eleTitle">
            <img src="favicon.ico" alt="" />
          </div>
          <div className="phone">
            <input type="text" placeholder="手机号" id="phone" onChange={this.getPhone.bind(this)}></input>
            <div className="getCode" onClick={this.getCode.bind(this)}>获取验证码</div>
          </div>
          <div className="phoneCode" >
            <input type="text" placeholder="验证码" id="phoneCode"></input>
          </div>
          <div className="loginInfo">
            新用户登录即自动注册，并表示以同意<span>《用户服务协议》</span>
          </div>
          <div className="isLogin">
            登录
          </div>
          <div className="aboutUs">
            关于我们
          </div>
        </div>
      </div>
    )
  }
}

export default Com
