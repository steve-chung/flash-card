import React, { Component } from 'react'
import Home from './home'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardInfo: [
        {
          question: ' ',
          answer: ' '
        }
      ],
      // todos: JSON.parse(localStorage.getItem('todos')) || [],
      // nextId: JSON.parse(localStorage.getItem('nextId')) || 1
      view: {
        path: '',
        params: ' '
      }
    }

  }
  componentDidMount() {
    // window.addEventListener('beforeunload', () => {
    //   const {todos, nextId} = this.state
    //   const newTodos = todos.map((todo) => {
    //     const newObj = Object.assign({}, todo)
    //     console.log(newObj)
    //     return newObj
    //   })
    //   localStorage.setItem('todos', JSON.stringify(newTodos))
    //   localStorage.setItem('nextId', JSON.stringify(nextId))
    // })
  }
  // renderView() {
  //   const { path, params } = this.state.view
  //   if (!path.length)
  //   // switch (path) {
  //   //   // case 'about':
  //   //   //   return <About/>
  //   //   // case 'pokedex':
  //   //   //   const { type } = params
  //   //   //   const pokedex = type
  //   //   //     ? this.props.pokedex.filter(pokemon => pokemon.type === type)
  //   //   //     : this.props.pokedex
  //   //   //   return <Pokedex pokedex={pokedex} type={type}/>
  //   //   // default:
  //     <Home/>
  //   }
  // }

  render() {

    return (
      <Home />
    )
  }
}
