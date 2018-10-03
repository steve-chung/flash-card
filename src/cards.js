import React, { Component } from 'react'
import Card from './card'
import NoCard from './noCard'

export default class Cards extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    const { cards, lastId } = this.props
    const cardList = cards.map((card) => (
      <Card key={card.id} question={card.question} />
    ))

    return (
      <div>
        { lastId ? (cardList) : (<NoCard/>) }
      </div>
    )

  }
}
