import React from 'react'
import './Banner.css'
const Banner = ({leftText,rightText,img}) => {
  return (
    <div className='bannerCmp'>
        <div className='banner__left'>
          <h2 className="banner__h2">{leftText}</h2>
        </div>
        <div   className='banner__center'>
            <img className='banner__center__img' src={img}/>
        </div>
        <div className='banner__right'>
            <h2 className="banner__h2 banner__right__h2">{rightText}</h2>
        </div>
    </div>
  )
}

export default Banner