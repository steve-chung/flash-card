import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCard, updateCard } from './store/action/cardInfo'
import { setLastId } from './store/action/lastId'

class FlashCardForm extends Component {
  constructor(props) {
    super(props)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnSubmit(e, id) {
    e.preventDefault()
    const { lastId, edit } = this.props
    const question = e.target[0].value
    const answer = e.target[1].value
    if (!edit) {
      this.props.addCard(lastId, question, answer)
      this.props.setLastId(lastId)
    }
    else {
      this.props.updateCard(id, question, answer)
      this.props.cardEditSave()
      // window.location.assign('#cards')
    }

    e.target.reset()
  }
  render() {
    const styles = {
      'height': '100vh'
    }
    const { edit, cardInfo } = this.props
    const card = cardInfo && cardInfo.cardInfo.find((card) => card.clicked === true)
    return (
      <div className='container d-flex flex-column my-auto  align-items-center new-card' style={styles} onSubmit={card ? (e) => this.handleOnSubmit(e, card.id) : (e) => this.handleOnSubmit(e)}>
        <form className='w-50 my-auto card-form p-5 border border-dark'>
          <h1 id='new-card-title' className='mb-5 text-center'>{ edit ? 'Edit a Flash Card' : 'Create a Flash Card'}</h1>
          <div className='form-group mt-5'>
            <label htmlFor='question'>Question </label>
            { edit ? <input type='text' className='form-control' name='question' defaultValue={card.question} id='question' placeholder='Question' required/>
              : <input type='text' className='form-control' name='question' id='question' placeholder='Question' required/>}

          </div>
          <div className='form-group'>
            <label htmlFor='answer' >Answer </label>
            { edit ? <textarea rows='5' type='textarea' className='form-control' name='answer' defaultValue={card.answer} id='answer' placeholder='Answer' required/>
              : <textarea rows='5' type='textarea' className='form-control' name='answer' id='answer' placeholder='Answer' required/>}
          </div>
          <button type='submit' className='btn btn-primary' href='#cards'>Save</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cardInfo: state.cardInfo,
    lastId: state.lastId
  }
}

export default connect(mapStateToProps, { addCard, setLastId, updateCard })(FlashCardForm)
