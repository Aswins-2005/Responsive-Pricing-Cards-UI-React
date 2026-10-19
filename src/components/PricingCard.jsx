import React from 'react'

const PricingCard = ({plan}) => {
  return (

    <div className='Card'>
      <h4>{plan.title}</h4>
      <h2>{plan.price}</h2>
      <ul>
        {
          plan.features.map((features,index) =>(
            <li key = {index} className={features.available ? "black" : "grey"}><i className={`fa-solid ${features.available ? "fa-check" : " fa-xmark"}`}></i>{features.text}</li>
          ))
        }
      </ul>
      
      <button className='btn'>BUTTON</button>
    </div>
    
   
  )
}

export default PricingCard