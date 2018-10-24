import React, { Component } from 'react';
import Footer from '@/components/Footer';

class Com extends Component {
  render () {
    return (
      <div className = "box">
        <header className = "header"></header>
        <div className="content">购物车</div>
        <Footer />
      </div>
    )
  }
}

export default Com
