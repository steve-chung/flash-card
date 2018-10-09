import React, { Component } from 'react'
import CardSlide from './cardslide'
import { connect } from 'react-redux'

class Practice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0
    }
    this.handleChangePage = this.handleChangePage.bind(this)
  }

  handleChangePage(direction) {
    let {page} = this.state
    const {cardInfo} = this.props.cardInfo
    const cardLength = cardInfo.length
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
    return (
      <CardSlide page={page} onClick={this.handleChangePage} />
    )
  }

}

function mapStateToProps(state) {
  return {
    cardInfo: state.cardInfo
  }
}

export default connect(mapStateToProps, null)(Practice)
