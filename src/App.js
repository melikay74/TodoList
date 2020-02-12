import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';
import uuid from 'uuid';

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Test item',
        completed: false
      }
    ]
  }

  //Toggle Complete
  markComplete = (id) => {
    //match completed values based on if checked
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        //toggle state of completed->set to opposite value
        todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  //Delete Todo
  delTodo = (id) => {
    //return todos that don't match id that is passed in, using filter (returns new array of items matching the filter params)
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !==id)]})
  }
  
  // Add To Do    
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title, //or es6=title
      completed: false
    }
    console.log(newTodo.id);
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/todolist/" render={props => (
              <React.Fragment>
                <AddTodo addTodo = {this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo = {this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/todolist/about" component={About} />
            
          </div>
        </div>
      </Router>
    );
  }

}


export default App;
