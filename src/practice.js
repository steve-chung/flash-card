import React, { Component } from 'react'
import CardSlide from './cardslide'

export default class Practice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      translateValue: 0,
      lastTransValue: 0
    }
    this.handleChangePage = this.handleChangePage.bind(this)
  }

  calculateLastPageView() {
    const {cards} = this.props
    const cardLength = cards.length
    const newLastTransValue = (cardLength - 1) * this.slideWidth()
    this.setState({
      lastTransValue: -newLastTransValue
    })
  }

  componentDidMount() {
    this.calculateLastPageView()
  }

  slideWidth() {
    return document.querySelector('.practice').clientWidth
  }

  handleChangePage(direction) {
    let {page, translateValue, lastTransValue} = this.state
    const {cards} = this.props
    const cardLength = cards.length
    switch (direction) {
      case 'left':
        if (page > 0) {
          page -= 1
          translateValue = translateValue + this.slideWidth()
        }
        else {
          page = cardLength - 1
          translateValue = lastTransValue
        }
        break
      case 'right':
        if (page < cardLength - 1) {
          page += 1
          translateValue = translateValue - this.slideWidth(0)
        }
        else {
          page = 0
          translateValue = 0
        }
        break
    }
    console.log(page)
    this.setState({
      page,
      translateValue
    })
  }
  render() {
    console.log(this.state)
    const {page, translateValue} = this.state
    const {cards} = this.props
    return (
      <CardSlide page={page} translateValue={translateValue} cardInfo={cards} onClick={this.handleChangePage} />
    )
  }

}
