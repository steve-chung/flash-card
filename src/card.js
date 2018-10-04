import React from 'react'

const Card = (props) => {
  const {question, cardId} = props
  const href = cardId ? `#edit?id=${cardId}` : '#edit'
  return (
    <div className='card bg-light mb-4' style={{'width': '18rem'}}>
      <div className='card-body' >
        <h5 className='text-center'>{question}</h5>
        <a className='btn btn-primary' href={href}>edit</a>
      </div>
    </div>

  )
}

export default Card
