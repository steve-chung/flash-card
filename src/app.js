import React, { Component } from 'react'
import Home from './home'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardInfo: [
        {
          id: 0,
          question: ' ',
          answer: ' '
        }
      ],
      view: {
        path: '',
        params: ' '
      },
      lastId: 0
    }
    this.handleSave = this.handleSave.bind(this)
  }
  componentDidMount() {

  }

  handleSave(e) {
    e.preventDefault()
    const {cardInfo, lastId} = this.state
    const newState = {
      id: lastId + 1,
      question: e.target[0].value,
      answer: e.target[1].value
    }
    const copyInfo = cardInfo.map((newCard) => {
      return Object.assign({}, newCard)
    })
    copyInfo.push(newState)
    this.setState({
      cardInfo: copyInfo,
      lastId: lastId + 1
    })
    let $input = document.querySelectorAll('input')
    for (let i = 0; i < $input.length; i++) {
      $input[i].value = ''
    }
  }
  render() {
    return (
      <Home handleOnSubmit = {this.handleSave} />
    )
  }
}
