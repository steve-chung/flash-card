import React, { Component, Fragment } from 'react'
import FlashCardForm from './flashcardform'
import hash from './hash'
import NavBar from './navbar'
import Cards from './cards'

export default class App extends Component {
  constructor(props) {
    super(props)
    const link = window.location.hash
    this.state = {
      cardInfo: JSON.parse(localStorage.getItem('cardInfo')) || [],
      lastId: JSON.parse(localStorage.getItem('lastId')) || 0,
      view: {
        path: hash.parse(link).path,
        params: hash.parse(link).params
      }
    }
    this.handleSave = this.handleSave.bind(this)
    this.cardEditSave = this.cardEditSave.bind(this)
  }
  componentDidMount() {
    window.addEventListener('beforeunload', () => {
      const {cardInfo, lastId} = this.state
      localStorage.setItem('cardInfo', JSON.stringify(cardInfo))
      localStorage.setItem('lastId', JSON.stringify(lastId))
    })
    window.addEventListener('hashchange', (e) => {
      const hashInfo = hash.parse(e.target.location.hash)
      this.setState({
        view: {
          path: hashInfo.path,
          params: hashInfo.params
        }
      })
    })
    window.dispatchEvent(new Event('hashchange'))
  }

  cardEditSave(id, question, answer) {
    const { cardInfo } = this.state
    const newState = {
      id,
      question,
      answer
    }
    let copyInfo = cardInfo.slice()
    let cardIndex = copyInfo.findIndex(card => card.id === id)
    copyInfo.splice(cardIndex, 1, newState)
    this.setState({
      cardInfo: copyInfo
    })
    location.assign('#cards')
  }

  renderView() {
    const { path, params } = this.state.view
    const { cardInfo, lastId } = this.state
    switch (path) {
      case 'cards' :
        return <Cards key={lastId} cards = {cardInfo} lastId={lastId} />
      case 'new' :
        return <FlashCardForm handleOnSubmit={this.handleSave}/>
      case 'edit':
        const { id } = params
        const selectedCard = cardInfo.find(card => card.id === parseInt(id, 10))
        return <FlashCardForm edit cardId={id} card={selectedCard} cardEditSave = {this.cardEditSave}/>
      default:
        return <Cards key={lastId} cards = {cardInfo} lastId={lastId} />
    }
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
    e.target.reset()
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        { this.renderView() }
      </Fragment>
    )
  }
}
