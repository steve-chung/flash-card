import React, { Component } from 'react'
import FlashCardForm from './flashcardform'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardInfo: JSON.parse(localStorage.getItem('cardInfo')) || [],
      lastId: JSON.parse(localStorage.getItem('lastId')) || 0
    }
    this.handleSave = this.handleSave.bind(this)
  }
  componentDidMount() {
    window.addEventListener('beforeunload', () => {
      const {cardInfo, lastId} = this.state
      localStorage.setItem('cardInfo', JSON.stringify(cardInfo))
      localStorage.setItem('lastId', JSON.stringify(lastId))
    })
  }

  handleSave(e) {
    e.preventDefault()
    const {cardInfo, lastId} = this.state
    const newState = {
      id: lastId + 1,
      question: e.target[0].value,
      answer: e.target[1].value
    }
    const copyInfo = cardInfo.slice()
    copyInfo.push(newState)
    this.setState({
      cardInfo: copyInfo,
      lastId: lastId + 1
    })
    localStorage.clear()
    e.target.reset()
  }

  render() {
    return (
      <FlashCardForm handleOnSubmit = {this.handleSave} />
    )
  }
}
