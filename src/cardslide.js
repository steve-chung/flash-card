import React, {Component} from 'react'
import { connect } from 'react-redux'

const style = {
  arrow: {
    fontSize: '2rem',
    transform: 'rotate(90deg)',
    transition: 'transform 1s ease-out'
  },
  progress: {
    height: '1.5rem'
  }

}

class CardSlide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAnswer: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.toggleShowAnswer = this.toggleShowAnswer.bind(this)
  }

  toggleShowAnswer() {
    this.setState((state) => ({
      showAnswer: !state.showAnswer
    }))
  }

  handleClick(direction) {
    this.props.onClick(direction)
    this.setState({
      showAnswer: false
    })
  }

  render() {
    const {page} = this.props
    const {question, answer} = this.props.cardInfo[page]
    const cardCount = this.props.cardInfo.length
    const {showAnswer} = this.state
    const progressWidth = ((page + 1) === cardCount) ? 100 : parseInt((100 / cardCount), 10) * (page + 1)
    const answerClass = 'text-center d-block answer text-white align-middle card card-body rounded-bottom'

    return (
      <div className='card-container d-flex'>
        <div className='container practice position-relative mx-auto justify-content-center'>
          <div className='card-slide position-absolute'>
            <div className='d-inline-block slide-card rounded'>
              <p className='text-center question p-3'>Q: {question}</p>
              <i className="fas fa-arrow-circle-right arrow"
                style={showAnswer ? style.arrow : {fontSize: '2rem'}}
                onClick={this.toggleShowAnswer}>
              </i>
              <span className='seeAnswer'> See Answer</span>
              <div className = {showAnswer ? 'd-block' : 'd-none'} style={{height: '50%'}}>
                <p className={answerClass}>
                  <span className='d-inline-block float-left'>Answer: </span> {answer}
                </p>
              </div>
            </div>
          </div>
          <div className="progress" style={style.progress}>
            <div className="progress-bar" role="progressbar" style={{width: `${progressWidth}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{progressWidth}%</div>

          </div>
        </div>
        <div><i className="fas fa-chevron-circle-right right position-absolute" onClick={() => this.handleClick('right')}></i></div>
        <div><i className="fas fa-chevron-circle-left left position-absolute" onClick={() => this.handleClick('left')}></i></div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    cardInfo: state.cardInfo.cardInfo
  }
}

export default connect(mapStateToProps, null)(CardSlide)
