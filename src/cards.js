import React, { Component } from 'react'
import Card from './card'
import NoCard from './noCard'

export default class Cards extends Component {

  render() {
    const { cards, lastId } = this.props
    const cardList = cards.map((card, i) => (
      <div className='col-md-4 d-flex align-items-stretch'
        key={card.id}>
        <Card question={card.question} cardId={card.id} />
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
