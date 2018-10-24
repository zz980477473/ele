import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => (
  <footer className="footer">
    <ul>
      <NavLink replace to = '/home'>
      <p className = "iconfont icon-changyonglogo40"></p>
      首页</NavLink>
      <NavLink replace to = '/kind'>
      <p className = "iconfont icon-faxian"></p>
      发现</NavLink>
      <NavLink replace to = '/cart'>
      <p className = "iconfont icon-tuanduicankaoxian-"></p>
      订单</NavLink>
      <NavLink replace to = '/user'>
      <p className = "iconfont icon-wode"></p>
      我的</NavLink>
    </ul>
  </footer>
)

export default Footer
