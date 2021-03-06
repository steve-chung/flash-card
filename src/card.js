import React from 'react'

const Card = (props) => {
  const {question, cardId} = props
  const href = cardId ? `#edit?id=${cardId}` : '#edit'
  return (
    <div className='card bg-light mb-4' style={{'width': '18rem'}}>
      <div className='card-body' >
        <h5 className='text-center'>{question}</h5>
      </div>
      <div className='card-footer border-no bg-light' style={{'borderTop': 'none'}}>
        <a className='fas fa-edit float-right pt-2' name='edit' style={{'color': 'black'}} onClick={(e) => props.onClick(e, cardId)} href={href}></a>
        <button className='fas fa-trash-alt float-right mr-3 btn btn-outline-none bg-transparent' name='delete'
          style={{backgroundColor: 'inherit'}}
          onClick={(e) => props.onClick(e, cardId)}></button>
      </div>
    </div>

  )
}

export default Card
