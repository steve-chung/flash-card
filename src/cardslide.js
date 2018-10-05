import React, {Component} from 'react'

export default class CardSlide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick() {
    this.setState((state) => ({
      isClicked: !state.isClicked
    }))
  }

  handleClick(direction) {
    this.props.onClick(direction)
    this.setState({
      isClicked: false
    })
  }

  render() {
    const {question, answer} = this.props.cardInfo
    const {cardCount, page} = this.props
    const {isClicked} = this.state
    const progressWidth = ((page + 1) === cardCount) ? 100 : parseInt((100 / cardCount), 10) * (page + 1)
    const styleArrow = {
      fontSize: '2rem',
      transform: 'rotate(90deg)',
      transition: 'transform 1s ease-out'
    }
    const styleAnswer = {
      transform: 'scale(1, 1)',
      transition: 'transform 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }

    return (
      <div className='card-container'>
        <div className='container practice position-relative mx-auto'>
          <div className='card-slide position-absolute'>
            <div className='d-inline-block slide-card border border-secondary'>
              <p className='text-center question p-3'>Q: {question}</p>
              <i className="fas fa-arrow-circle-right" style={isClicked ? styleArrow : {fontSize: '2rem'}} onClick={this.handleOnClick}></i><span> See Answer</span>
              <h4 className='text-center bg-danger answer text-white align-middle' style={isClicked ? styleAnswer : {transform: 'scale(1, 0)'} }>A: {answer}</h4>
            </div>
          </div>
          <div className="progress" style={{height: '1.5rem'}}>
            <div className="progress-bar" role="progressbar" style={{width: `${progressWidth}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{progressWidth}%</div>
          </div>
        </div>
        <div><i className="fas fa-chevron-circle-right right position-absolute" onClick={() => this.handleClick('right')}></i></div>
        <div><i className="fas fa-chevron-circle-left left position-absolute" onClick={() => this.handleClick('left')}></i></div>
      </div>

    )
  }
}
