import React from 'react'
import { Link } from 'react-router-dom'
import '@/components/Home/prolist.scss'

const Com = ({prolist}) => {
  console.log(prolist)
  let src = []
//   let src = '/img/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/150x/'
  let arr = []
  let a = '',
  b = ''
  if (prolist.length > 0) {
    prolist = prolist.slice(0,10)
    prolist.map((item, index) => {
      a = item.image_hash.substr(0,1)
      b = item.image_hash.substr(1,2)
      let image = '/img/'+ a +'/'+b+'/'+item.image_hash.slice(3)+'.jpeg?imageMogr/format/webp/thumbnail/150x/'
      src.push(image)
      arr.push(<Link to={'/kind'} className="proItem" key={ index }>
          <div className="itemImg">
            <img src={src[index]} alt='' />
            <p>{item.name}</p>
          </div>
        </Link>)
        return arr
      })
    }
  return (
    <ul className="proList" id="prolist">
      {
        arr
      }
    </ul>
  )
}

export default Com
