import React, { Component } from 'react'
import Card from './card'

export default class Cards extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    const { cards } = this.props
    const cardList = cards.map((card) => (
      <Card key={card.id} question={card.question} />
    ))

    return (
      <div>
        {cardList}
      </div>
    )

  }
}
