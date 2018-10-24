import React, { Component } from 'react';
import '@/components/hot/index.scss';
import { Link } from 'react-router-dom';
import { Toast } from 'antd-mobile';
import Footer from '@/components/Footer';

class Com extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      index: 2,
    }
  }
  onChange(e) {
    var target = e.target || e.srcElement
    if(target.nodeName === 'P'){
      console.log(target.className)
    }
    Toast.loading('Loading...', 1, () => {
      console.log(target.textContent)
      if(target.textContent === '早餐') {
        this.setState({
        index: 1
        })
      } else if(target.textContent === '午餐') {
        this.setState({
          index: 2
          })
      }else if(target.textContent === '下午茶') {
        this.setState({
          index: 3
          })
      }else if(target.textContent === '晚餐') {
        this.setState({
          index: 4
          })
      }
      console.log('Load complete !!!');
      this.componentDidMount ()
    });
    this.componentDidMount ()
  }
  componentDidMount () {
    fetch('/ele/restapi/shopping/v3/flash/foods?type='+ this.state.index +'&offset=0&latitude=22.620896&longitude=113.843202&limit=20').then(res => res.json())
      .then(data => {
        console.log(data.foods)
        this.setState({
          list: data.foods,
        })
    })
  }
  changeimg() {
    this.componentDidMount ()
  }
  render () {
    let src = []
    let arr = []
    let a = '',
    b = '',
    c = ''
    if(this.state.list.length > 0) {
      this.state.list.map((item, index) => {
      a = item.image_hash.substr(0,1)
      b = item.image_hash.substr(1,2)
      c = item.image_hash.substr(32)
      let image = '/img/'+ a +'/'+b+'/'+item.image_hash.slice(3)+'.'+c+'?imageMogr/format/webp/thumbnail/150x/'
      src.push(image)
        arr.push(<Link to={'/kind'} className="proItem" key={ index }>
        <div className="itemImg">
          <div className="top">
            <p>{item.restaurant_name}</p>
            <p>评价：{item.restaurant_rating}分</p>
            <p>配送费：{item.restaurant_status}</p>
          </div>
          <div>
            <img alt="" src={src[index]}/>
          </div>
        </div>
      </Link>)
        return arr
      }) 
    }
    return (
      <div className = "box">
        <header className = "header">
          <div className="headerBox">
          <div className="am-segment" onClick={this.onChange.bind(this)}>
            <p className="am-segment-item" index ="0"><span>早餐</span></p>
            <p className="am-segment-item active" index ="1"><span>午餐</span></p>
            <p className="am-segment-item" index ="2"><span>下午茶</span></p>
            <p className="am-segment-item" index ="3"><span>晚餐</span></p>
          </div>
          {/* <SegmentedControl selectedIndex = {1} values={['早餐', '午餐', '下午茶','晚餐',]} onChange={this.onChange}/> */}
          </div>
        </header>
        <div className="content">
          {
            arr
          }
        </div>
        <Footer />
      </div>
    )
  }
}
export default Com
