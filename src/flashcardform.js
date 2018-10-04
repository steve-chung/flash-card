import React, { Component } from 'react'

export default class FlashCardForm extends Component {
  constructor(props) {
    super(props)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnSubmit(e) {
    e.preventDefault()
    const question = e.target[0].value
    const answer = e.target[1].value
    this.props.cardEditSave(this.props.card.id, question, answer)
  }
  render() {
    const styles = {
      'height': '100vh'
    }
    const { edit } = this.props

    return (
      <div className='container d-flex flex-column my-auto  align-items-center new-card' style={styles} onSubmit={edit ? this.handleOnSubmit : this.props.handleOnSubmit}>
        <form className='w-50 my-auto'>
          <h1 id='new-card-title' className='mb-5 text-center'>{ edit ? 'Edit a Flash Card' : 'Create a Flash Card'}</h1>
          <div className='form-group mt-5'>
            <label htmlFor='question'>Question </label>
            { edit ? <input type='text' className='form-control' name='question' defaultValue={this.props.card.question} id='question' placeholder='Question' required/>
              : <input type='text' className='form-control' name='question' id='question' placeholder='Question' required/>}

          </div>
          <div className='form-group'>
            <label htmlFor='answer' >Answer </label>
            { edit ? <input type='text' className='form-control' name='answer' defaultValue={this.props.card.answer} id='answer' placeholder='Answer' required/>
              : <input type='text' className='form-control' name='answer' id='answer' placeholder='Answer' required/>}
          </div>
          <button type='submit' className='btn btn-primary' href='#cards'>Save</button>
        </form>
      </div>
    )
  }
}
