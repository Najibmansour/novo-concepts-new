import React from 'react'
import './Company.css'

const Values = () => {
  return (
    <div className="our-story-container">
      <div className='story__left'>
        <h1 className="title-text">OUR VALUES</h1>
      </div>      
      <div className='story__right'>
        <p className="description-text">
          At Novo Concepts, values guide our actions, shape our culture, and define our commitment to our clients and partners.
        </p>
        <br />
        <p className="description-text">
          <strong className='description__header'>1. Client-Centricity:</strong> 
          <br/>
          Our clients are at the heart of our business. We are dedicated to understanding their uniqueness and we tailor our services to help them achieve their goals. Our success is measured by the success of our clients.
        </p>
        <br />
        <p className="description-text">
          <strong className='description__header'>2. Innovation:</strong>
          <br/>
           Innovation is the key to success in the world of business. We are committed to staying ahead of industry trends and continuously improving our strategies and solutions. Our creative approach ensures that we deliver cutting-edge services that drive results.
        </p>
        <br />
        <p className="description-text">
          <strong className='description__header'>3. Collaboration:</strong>
          <br/>
           We believe in the power of teamwork. We harness the diverse skills and expertise of our team members. We also work closely with our clients, viewing them as partners in our shared journey towards success.
        </p>
        <br />
        <p className="description-text">
          <strong className='description__header'>4. Continuous Growth:</strong>
          <br/>
           Continuous growth and learning are vital to our success. We invest in the professional development of our team and encourage a culture of curiosity and lifelong learning.
        </p>
        <br />
        <p className="description-text">
          <strong className='description__header'>5. Social Responsibility:</strong>
          <br/>
          
           We are committed to making a positive impact beyond our business. This includes ethical business practices, supporting sustainable initiatives, and contributing to the communities we serve.
        </p>
        <br />
        <p style={{fontWeight:'500'}} className="description-text">
          These values are more than just words; they are the principles that guide our daily acts and long-term vision. At Novo Concepts, we are proud to uphold these values as we help businesses thrive in the digital age.
        </p>
      </div>
    </div>
  )
}

export default Values
