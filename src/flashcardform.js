import React from 'react'

const FlashCardForm = (props) => (
  <div className='container d-flex flex-column my-auto  align-items-center new-card' onSubmit={props.handleOnSubmit}>
    <form className='w-50 my-auto'>
      <h1 id='new-card-title' className='mb-5 text-center'>Create a Flash Card</h1>
      <div className='form-group mt-5'>
        <label htmlFor='question'>Question </label>
        <input type='text' className='form-control' name='question' value={props.question} id='question' placeholder='Question'/>
      </div>
      <div className='form-group'>
        <label htmlFor='answer'>Answer </label>
        <input type='text' className='form-control' name='answer' value={props.answer} id='answer' placeholder='Answer'/>
      </div>
      <button type='submit' className='btn btn-primary'>Save</button>
    </form>
  </div>
)

export default FlashCardForm
