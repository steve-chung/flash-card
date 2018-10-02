import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardInfo : [
        {question: ' ',
         answer: ' '}
      ]
      // todos: JSON.parse(localStorage.getItem('todos')) || [],
      // nextId: JSON.parse(localStorage.getItem('nextId')) || 1
    }
  }
  componentDidMount() {
    window.addEventListener('beforeunload', () => {
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
  render() {

    return (
      )
  }
}
