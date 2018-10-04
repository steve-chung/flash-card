import React, { Component } from 'react'
import Card from './card'
import NoCard from './noCard'

export default class Cards extends Component {
  constructor(props) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(id) {
    this.props.handleOnDelete(id)
  }
  render() {
    const { cards, lastId } = this.props
    const cardList = cards.map((card) => (
      <div className='col-md-4 d-flex align-items-stretch'
        key={card.id}>
        <Card question={card.question} cardId={card.id} onClick={this.handleOnClick}/>
      </div>))

    return (
      <div className='container'>
        <div className='row'>

          { lastId ? (cardList) : (<NoCard/>) }
        </div>
      </div>
    )

  }
}
