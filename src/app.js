import React, { Component, Fragment } from 'react'
import FlashCardForm from './flashcardform'
import hash from './hash'
import NavBar from './navbar'
import Cards from './cards'
import EditCard from './editcard'

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

  renderView() {
    const { path, params } = this.state.view
    const { cardInfo, lastId } = this.state
    switch (path) {
      case 'cards' :
        return <Cards cards = {cardInfo} lastId={lastId} />
      case 'new' :
        return <FlashCardForm handleOnSubmit={this.handleSave}/>
      case 'edit':
        const { id } = params
        const selectedCard = id ? cardInfo.filter(card => card.id === id) : undefined
        return <EditCard card={selectedCard} />
      default:
        return <FlashCardForm handleOnSubmit={this.handleSave}/>
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
    localStorage.clear()
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
