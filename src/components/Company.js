import React from 'react'
import './Company.css'
const Company = () => {
  return (
    <div className="our-story-container">
<div className='story__left'>
<h2 className="question-text">What is our company?</h2>
<h1 className="title-text">OUR STORY</h1>
    </div>      
     <div className='story__right'>
     <p className="description-text">
        Novo Concepts started with a simple but powerful vision, which is 
        <em>"empower businesses to thrive in the world of e-commerce"</em>. Recognizing the potential and challenges of online marketplaces, our founder set out to create a company dedicated to providing exceptional advertising and marketing consulting services.
      </p>
      <br />
      <p className="description-text">
        The journey began with a passionate team working tirelessly to understand the intricacies of platforms like Amazon and Noon. 
      </p>
      <br />

      <p className="description-text">
        Through dedication and innovation, we quickly established ourselves as a trusted partner for businesses looking to enhance their presence and maximize their sales.
      </p>
      <br />

      <p className="description-text">
        As we look to the future, we remain committed to our core values of integrity, creativity, and client satisfaction. We are excited to continue our journey, helping businesses of all sizes unlock their full potential in the dynamic world of online marketplaces.
      </p>

     </div>
    </div>
  )
}

export default Company