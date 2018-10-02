import React from 'react'

const Home = (props) => (
  <div className='container new-card' onSubmit={props.handleOnSubmit}>
    <h1 id='new-card-title'>Create a Flash Card</h1>
    <form className='w-50'>
      <div className='form-group'>
        <label htmlFor='question'>Question </label>
        <input type='text' className='form-control' name='question' id='question' placeholder='Question'/>
      </div>
      <div className='form-group'>
        <label htmlFor='answer'>Answer </label>
        <input type='text' className='form-control' name='answer' id='answer' placeholder='Answer'/>
      </div>
      <button type='submit' className='btn btn-primary'>Save</button>
    </form>
  </div>
)

export default Home
