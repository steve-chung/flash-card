import React, {Component} from 'react'

export default class SlideCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClick: false
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick() {
    this.setState((state) => ({
      isClick: !state.isClick
    }))
  }
  render() {
    const {question, answer} = this.props.card
    const {isClick} = this.state
    console.log(this.state)
    const styleArrow = {
      fontSize: '2rem',
      transform: 'rotate(90deg)',
      transition: 'transform 1s ease-out'
    }

    const styleAnswer = {
      transform: 'scale(1)',
      transition: 'transform 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }
    return (

      <div className='d-inline-block slide-card border border-secondary'>
        <h3 className='text-center question'>Q: {question}</h3>
        <i className="fas fa-arrow-circle-right" style={isClick ? styleArrow : {'fontSize': '2rem'}} onClick={this.handleOnClick}></i><span> See Answer</span>
        <h4 className='text-center bg-danger answer text-white align-middle' style={isClick ? styleAnswer : {transform: 'scale(0)'} }>A: {answer}</h4>
      </div>

    )
  }
}
