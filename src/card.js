import React from 'react'

const Card = (props) => (
  <div className='card bg-light mb-4' style={{'width': '18rem'}}>
    <div className='card-body' >
      <h5 className='text-center'>{props.question}</h5>
    </div>
  </div>

)

export default Card
