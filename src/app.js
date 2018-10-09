import React, { Component, Fragment } from 'react'
import FlashCardForm from './flashcardform'
import hash from './hash'
import NavBar from './navbar'
import Cards from './cards'
import Practice from './practice'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
    const link = window.location.hash
    this.state = {
      view: {
        path: hash.parse(link).path,
        params: hash.parse(link).params
      }
    }
    this.cardEditSave = this.cardEditSave.bind(this)
  }
  componentDidMount() {
    window.addEventListener('beforeunload', () => {
      const {cardInfo, lastId} = this.props
      localStorage.setItem('cardInfo', JSON.stringify(cardInfo))
      localStorage.setItem('lastId', JSON.stringify(lastId))
    })
    window.addEventListener('hashchange', (e) => {
      const hashInfo = hash.parse(e.target.location.hash)
      this.setState({
        view: {
          path: hashInfo.path,
          params: hashInfo.params
        }
      })
    })
    window.dispatchEvent(new Event('hashchange'))
  }

  cardEditSave() {
    console.log('passed')
    location.assign('#cards')
    this.setState({
      view: {
        path: 'cards'
      }
    })
  }

  renderView() {
    const { path } = this.state.view
    switch (path) {
      case 'cards' :
        return <Cards />
      case 'new' :
        return <FlashCardForm/>
      case 'edit':
        return <FlashCardForm edit cardEditSave={this.cardEditSave}/>
      case 'practice':
        return <Practice />
      default:
        return <Cards />
    }
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        { this.renderView() }
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    cardInfo: state.cardInfo.cardInfo,
    lastId: state.lastId.lastId
  }
}
export default connect(mapStateToProps, null)(App)
