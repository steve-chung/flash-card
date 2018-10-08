import React, { Component } from 'react'
import Card from './card'
import { connect } from 'react-redux'
import NoCard from './noCard'
import { deleteCard } from './store/action/cardInfo'

class Cards extends Component {
  constructor(props) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(id) {
    this.props.deleteCard(id)
  }
  render() {
    const { cardInfo, lastId } = this.props
    const cardList = cardInfo.map((card) => (
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

function mapStateToProps(state) {
  return {
    cardInfo: state.cardInfo.cardInfo,
    lastId: state.lastId.lastId
  }
}

export default connect(mapStateToProps, {deleteCard})(Cards)
