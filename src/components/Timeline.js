import React from 'react'
import './Timeline.css'
const Timeline = () => {
  return (
<section className="timeline">
  <div className="container">
    <div className="timeline-item">
      <div className="timeline-img"></div>

      <div className="timeline-content js--fadeInLeft">
        <h2>Multi-Channel Marketing</h2>
        <p>Our strategy includes comprehensive marketing and advertising campaigns across multiple channels. We utilize platforms like Amazon, Noon, and other relevant marketplaces.</p>
      </div>
    </div> 

     <div className="timeline-item">
      <div className="timeline-img"></div>
      <div className="timeline-content js--fadeInRight">
        <h2>Product Sourcing</h2>
        <p>We begin by collaborating with producers to understand their products:
        brand vision, and target market. We handle the onboarding process, setting up product listings with optimized titles, descriptions, images, and keywords to enhance visibility and appeal.</p>
      </div>
    </div>   

    <div className="timeline-item">
      <div className="timeline-img"></div>

      <div className="timeline-content js--fadeInLeft">
        <h2>Market Analysis</h2>
        <p>Using advanced data analytics, we conduct thorough market research to identify trends, competitor strategies, and consumer behavior. This information helps us develop a tailored marketing and sales strategy that aligns with the producer’s goals. We focus on positioning the products effectively to capture the target audience’s attention.</p>
      </div>
    </div> 

     <div className="timeline-item">
      <div className="timeline-img"></div>
      <div className="timeline-content js--fadeInRight">
        <h2>Performance Monitoring and Optimization</h2>
        <p>Continuous improvement is at the core of our strategy. We monitor the performance of our marketing campaigns, sales, and customer feedback, using this data to refine our approach.</p>
      </div>
    </div>  
    <div className="timeline-item">
      <div className="timeline-img"></div>
      <div className="timeline-content js--fadeInRight">
        <h2>Feedback and Innovation</h2>
        <p>We value feedback from both producers and clients, using it to drive innovation and enhance our services. By staying attuned to market trends and emerging technologies, we continuously explore new opportunities and strategies to keep our clients ahead of the competition.</p>
      </div>
    </div>   
      
      



  </div>
</section>
  )
}

export default Timeline