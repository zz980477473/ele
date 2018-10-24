import React, { Component } from 'react'
import { Toast } from 'antd-mobile';
import './shop.scss'



class Com extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rst:'',
    }
  }
  componentDidMount () {
    Toast.loading();
    console.log(111)
    const urla = '/search/pizza/shopping/restaurants/959831/batch_shop?code=0.5698070095509911&extras=%5B%22activities%22%2C%22albums%22%2C%22license%22%2C%22identification%22%2C%22qualification%22%5D&terminal=h5&latitude=22.620896&longitude=113.843202'
    fetch(urla).then(res => res.json())
      .then(data => {
       console.log(data)
       this.setState({
        rst:data
      },() => {
        console.log(this.state.rst)    
      });
        setTimeout(() => {
          Toast.hide();
        }, 1000)

      }).catch(err => console.log(err))
      
  }
  render () {
    if(typeof this.state.rst == 'object') {
      console.log(this.state.rst.rst.shop_sign.image_hash)
      var path = this.state.rst.rst.shop_sign.image_hash
      var imgurl ="http://fuss10.elemecdn.com/" + path.slice(0 ,1)+"/"+path.slice(1 ,3)+"/"+path.slice(3)+"."+path.slice(32)
    } 
    return (
      <div className = "box">
        <header style={{ background:'url('+imgurl+') no-repeat' ,fontSize:40}} className = "sign">
        </header>
        <div className="main">
          wode
        </div>
        
      </div>
      )
  }
}

export default Com