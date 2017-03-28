import React, { Component } from 'react';
import Nav from './Nav';
import Cards from './Cards';
import Search from './Search'
import Footer from './Footer'

// //Setup
//     constructor(props) {
//         super(props)
//         // if you make a custom method you have to bind it in your constructor
//         // this.addTodo = this.addTodo.bind(this)
//         // this.getTodos = this.getTodos.bind(this)
//         // this.toggleTodoComplete = this.toggleTodoComplete.bind(this)

//         Initial state
//         this.state = {
//             cards: []
//         }
//     }

// React lifecycle Methods
// componentWillMount() {
//     // this.getTodos()
// }

//API methods
// getTodos(){
//     fetch('/api/v1/todos')
//         .then(response => response.json())
//         .then(todos => this.props.dispatch({type: 'TODOS_UPDATE', body: todos}))
// }
// addTodo(todo) {
//     this.getTodos()
//     // let newTodos = this.state.todos
//     // newTodos.unshift(todo)
//     // this.setState({todos: newTodos})
// }

// toggleTodoComplete(todoId, isComplete) {
//         if (isComplete) {
//             fetch(`/api/v1/todos/${todoId}/complete`)
//             .then(this.getTodos)
//         }
    
//         else {
//             fetch(`/api/v1/todos/${todoId}/incomplete`)
//             .then(this.getTodos)
//         }
//     }

class App extends Component {
  render() {
    return <div>
      <Nav/>
      <Search />
      <Cards/>
      <Footer />
      </div>
    
  }
}

export default App;
