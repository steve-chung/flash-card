import React, { Component } from 'react'
import CardSlide from './cardslide'

export default class Practice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0
    }
    this.handleChangePage = this.handleChangePage.bind(this)
  }

  handleChangePage(direction) {
    let {page} = this.state
    const {cards} = this.props
    const cardLength = cards.length
    switch (direction) {
      case 'left':
        if (page > 0) {
          page -= 1
        }
        else {
          page = cardLength - 1
        }
        break
      case 'right':
        if (page < cardLength - 1) {
          page += 1
        }
        else {
          page = 0
        }
        break
    }
    this.setState({
      page
    })
  }
  render() {
    const {page} = this.state
    const {cards} = this.props
    return (
      <CardSlide cardInfo={cards[page]} onClick={this.handleChangePage} />
    )
  }

}
