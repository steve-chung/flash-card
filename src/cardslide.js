import React, {Component} from 'react'
import SlideCard from './slidecard'

export default class CardSlide extends Component {

  handleClick(direction) {
    this.props.onClick(direction)
  }
  render() {
    const {translateValue, cardInfo} = this.props
    const cards = cardInfo.map((card, i) => (
      <SlideCard card = {card} key={i}/>
    ))

    return (
      <div className='card-container'>
        <div className='container practice position-relative mx-auto'>
          <div className='card-slide position-relative'
            style={{
              'transform': `translateX(${translateValue}px)`,
              'transition': 'transform 1s ease-out'}}>
            {cards}
            <div className='progress' style={{height: '1rem'}}>
              <div className='progress-bar'>
              </div>
            </div>
          </div>
        </div>
        <div><i className="fas fa-chevron-circle-right right position-absolute" onClick={() => this.handleClick('right')}></i></div>
        <div><i className="fas fa-chevron-circle-left left position-absolute" onClick={() => this.handleClick('left')}></i></div>
      </div>

    )
  }
}
