import React, { Component } from 'react'
import { Toast } from 'antd-mobile';
import './search.scss'
// const Com = connect(
//   (state) => { // 給UI组件值
//     // console.log('home', state)
//     return {
//       prolist: state.homedata.prolist,
//       bannerlist: state.homedata.bannerlist
//     }
//   },
//   (dispatch) => { // 响应UI组件的行为
//     return {
//       getData: () => {
//         // store.dispatch(action.getProlist)
//         store.dispatch(action.getProlist).then(() => {
//           console.log('数据加载完毕')
//         }).catch(() => {
//           console.log('err')
//         })
//         store.dispatch(action.getBannerList)
        
//       }
//     }
//   }
// )(UI);

// export default Com;
class Com extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      tab:'',
      list:'',
      key:'',
      vlue:'',
      a: true
    }
  }
  componentDidmount () {
    Toast.loading();
    const urla = '/search/restapi/shopping/v2/restaurants/search?offset=0&limit=15&keyword='+this.state.value+'&latitude=22.620896&longitude=113.843202&search_item_type=3&is_rewrite=1&extras[]=activities&extras[]=coupon&terminal=h5&'+this.state.key+'='+this.state.vlue
    const urlb='/search/pizza/shopping/restaurants/batch_filter?latitude=22.620896&longitude=113.843202&terminal=h5'
    fetch(urla).then(res => res.json())
      .then(data => {
       console.log(data)
        this.setState({
          list:data.inside[0].restaurant_with_foods
        },() => {
          console.log(this.state.list)
          
        });
        setTimeout(() => {
          Toast.hide();
        }, 1000)

      }).catch(err => console.log(err))
      fetch(urlb).then(res => res.json())
      .then(data => {
        
        this.setState({
          tab:data.outside
        },() => {
          console.log(this.state.tab)
          
        });
      
      }).catch(err => console.log(err))
  }
  getval() {
    const val = this.refs.username.value
    
    this.setState({
      value:val
    }, () => {
      console.log(this.state.value)
      this.componentDidmount()
    });
      
  }
  getint(key ,value) {
    this.setState({
      key:key,
      vlue:value
    }, () => {
      console.log(this.state.key ,this.state.vlue)
      this.componentDidmount()
    });
  }
  getout(key ,value) {
    this.setState({
      key:key,
      vlue:value
    }, () => {
      console.log(this.state.key ,this.state.vlue)
      this.componentDidmount()
    });
  }
  open() {
    
    var $w2 =document.querySelector('.w2')
    this.state.a=!this.state.a
    if(!this.state.a){      
      $w2.style.display="block"
    }else{
      $w2.style.display="none"
    }
  }
  render () {
    let arr = []
    let arr2 =[]
    let arr3 =[]
    if(typeof this.state.list == 'object') {

      this.state.list.map((item, index) => {
        
        var path = item.restaurant.image_path
        var imgurl ="http://fuss10.elemecdn.com/" + path.slice(0 ,1)+"/"+path.slice(1 ,3)+"/"+path.slice(3)+"."+path.slice(32)+"?imageMogr/format/webp/thumbnail/150x/"        
        return arr3.push(
          //列表
          <div key={index} className="searchlist">
            <div className="list-l"><img src={imgurl} alt="" /></div>
            <div className="list-r">
              <h3>{item.restaurant.name}</h3>
              <span className="xing">
                <ul className="xingxing">
                  <li><span className="iconfont icon-xingxing"></span></li>
                  <li><span className="iconfont icon-xingxing"></span></li>
                  <li><span className="iconfont icon-xingxing"></span></li>
                  <li><span className="iconfont icon-xingxing"></span></li>
                  <li><span className="iconfont icon-xingxing"></span></li>
                </ul>
              {item.restaurant.rating}
              </span>
              <span>月售：{item.restaurant.recent_order_num}单</span>
              <div className="r1">
                <div className="r2">
                  <span className="t1">￥{item.restaurant.float_minimum_order_amount}起送 | {item.restaurant.piecewise_agent_fee.description}</span>
                  <span className="t2">{item.restaurant.distance/1000}千米 | {item.restaurant.order_lead_time}分钟</span>
                </div>
                
                
                <div className="t3">{
                  item.restaurant.flavors.map((itm , idx) => {
                    return (<span key={idx} className="r3">{itm.name}</span>)
                  })
                }</div>
                
                <div className="t4">{
                  item.restaurant.activities.map((itemm ,indexx) => {
                    
                    return (<div key={indexx} className="active">
                      <span  className="y1">{itemm.icon_name}</span><span>{itemm.description}</span>
                    </div>)
                    
                    
                  })
                }
                  <span className="iconfont icon-xingxing"></span>
                </div>
                {
                  item.foods.map((itemmm,indexxx) => {
                    var path1=itemmm.image_path
                    var imgurl1 ="http://fuss10.elemecdn.com/" + path1.slice(0 ,1)+"/"+path1.slice(1 ,3)+"/"+path1.slice(3)+"."+path1.slice(32)+"?imageMogr/format/webp/thumbnail/150x/"
                    return(
                      <div className="q1" key={indexxx}>
                        <img src={imgurl1} alt="" />
                        <p>{itemmm.name}</p>
                        <p>￥{itemmm.price}</p>
                      </div>
                    )
                  })
                }
                <div>
                  <img src="" alt=""/>
                </div>
              </div>
              
              
            </div>
          </div>

        )
                
      })
    }
    if (typeof this.state.tab == 'object') {
      
      this.state.tab.inside_sort_filter.map((item, index) => {
        return arr2.push(<div key = {index} onClick={ this.getint.bind(this,item.key,item.value) }>{item.name}</div>)
      })
      this.state.tab.outside_sort_filter.map((item, index) => {
        return arr.push(<li key = {index} onClick={ this.getout.bind(this ,item.key,item.value)}>{item.name}</li>)
      })
    }
    return (
      <div className = "box">
        <header className = "header">
          <span className="iconfont icon-houtui1"></span>
          <form>
            <span className="iconfont icon-fangdajing"></span>
            <input type="text" placeholder="输入商家，商品名称" ref='username'/>
          </form>
          <p onClick={ this.getval.bind(this) }>搜索</p>
        </header>
        <div className="content">
          <div className="tab">
            
            <div className="w1">
              <div className="e1" onClick={this.open.bind(this)}>
              综合排序 <span className="iconfont icon-sanjiaoxing-down"></span>
              </div>
              <div className="w2">
              {arr2}
              </div>
              
            </div>
            {
              arr
            }
          </div>
          {
            arr3
          }
        
        </div>
      </div>
    )
  }
}

export default Com

