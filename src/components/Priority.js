import React from 'react'
import './Company.css'
import './Priority.css'
const Priority = () => {
  return (
    <div  className="work" style={{marginTop:'120px'}}>
    <div className=''>
    <h2 className="question-text">Why Choose Us ? </h2>
    <h1 className="title-text">OUR PRIORITY    </h1>
        </div>      
        <ul className='priority__ul'>
            <li>Customer Satisfaction : Quality, Support and Feedback.
            </li>
<li>
                 Financial Management : Profitability, Cost Control and Cash Flow
                 </li>
                 <li>
                  Innovation and Improvement : Product Development, Process Optimization and Technology.
                  </li> 
                  <li>
                   Market Expansion : Research, Marketing and Sales Growth.
                   </li>
                   <li>
                    Sustainability and Social Responsibility : Environment, Community and Ethics.
                    </li>
                    <li>
                     Strategic Planning : Vision, Goals and Adaptability
                     </li>
        </ul>
    
        </div>
  )
}

export default Priority