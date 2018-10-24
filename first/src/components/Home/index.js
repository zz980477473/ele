
import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
import Prolist from '@/components/Home/prolist'
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
// import Center from '@/components/Home/center'

class Com extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bannerlist: [
        'https://fuss10.elemecdn.com/8/ec/3e53fd7729bf68934db57086bf54ejpeg.jpeg?imageMogr/format/webp/thumbnail/568x/',
        'https://fuss10.elemecdn.com/1/1a/5e802e16602b33e37dcd1309df98cjpeg.jpeg?imageMogr/format/webp/thumbnail/568x/',
        'https://fuss10.elemecdn.com/7/b5/370d86b37cba5551b6d1642500345jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/'
      ],
      prolist: [],
      city: '',
      point: ['22.54286', '114.059563'],
      list: [],
      imgHeight: 176
    }
  }
  componentDidMount () {
    var geolocation = new window.BMap.Geolocation();
    geolocation.getCurrentPosition(this.getlocation.bind(this),{enableHighAccuracy: true})
    var myCity = new window.BMap.LocalCity();
    myCity.get(this.myFun.bind(this));
    const url = '/ele/restapi/shopping/openapi/entries?latitude='+this.state.point[0]+'&longitude='+this.state.point[1]+'&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5';
    fetch(url).then(res => res.json())
      .then(data => {
        // console.log(data[0])
        this.setState({
          prolist: data[0].entries,
          list: data[1].entries
        })
      }).catch(err => console.log(err))
  }
  getlocation (r) {
    console.log('您的位置：'+r.point.lng+','+r.point.lat);
    this.setState({
      point: [r.point.lat, r.point.lng]
    })
  }
  myFun(result){
    var cityName = result.name;
    this.setState({
      city: cityName
    })
    console.log("当前定位城市:"+cityName);
  }
  getCity () {
    console.log(11111)
    this.setState({ open: !this.state.open });
  }
  render () {
    // console.log(this.state.list)
    this.myFun.bind(this)
    return (
      <div className = "box">
      <header className="header" onClick={this.getCity.bind(this)}>
        {this.state.city}
      </header>
      <div className="content">
        <Prolist prolist = {this.state.prolist}></Prolist>
        <div className ="center">
          <div className="cen-l">
            <h3>品质联盟</h3>
            <p>搭配齐全吃的好</p>
            <p>立即抢购></p>
            <img src = 'https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/' alt=''/>
          </div>
          <div className="cen-r">
            <h3>品质联盟</h3>
            <p>搭配齐全吃的好</p>
            <Link to={'/hot'}>立即抢购></Link>
            <img src= 'https://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/' alt=''/>
          </div>
        </div>
        <Carousel
          autoplay={true}
          infinite
        >
          {this.state.bannerlist.map((val, index) => (
            <a
              key={index}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              href='/'
            >
              <img
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
      <Footer />
    </div>
    )
  }
}

export default Com
