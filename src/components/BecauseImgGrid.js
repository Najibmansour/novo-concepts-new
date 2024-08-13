import React from 'react'
import './BecauseImgGrid.css'
const BecauseImgGrid = () => {
  return (
    <div className='becauseGrid'>
        <div className='becauseGrid4'>
          <img src='https://i.imgur.com/vDO5YET.png' />
          <span className='becauseGrid__text'>
          Insights 
and Analytics
          </span>
        </div>
        <div className='becauseGrid4'>
          <img src='https://i.imgur.com/X4lGphv.png' />
          <span className='becauseGrid__text'>
          Simplified Logistics
          and Fulfillment
          </span>
        </div>
        <div className='becauseGrid4'>
          <img src='https://i.imgur.com/N2VmXaE.png' />
          <span className='becauseGrid__text'>
          Access to a Large
          Customer Base
          </span>
        </div>
        <div className='becauseGrid4'>
          <img src='https://i.imgur.com/nSBSX7Y.png' />
          <span className='becauseGrid__text'>
          Enhanced Visibility
and Trust
          </span>
        </div>
    </div>
  )
}

export default BecauseImgGrid