import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    //check if completed is true, add style
    return {
      borderBottom: '1px dotted #ccc',
      textDecoration: this.props.todo.completed ?'line-through' : 'none'
    }
      
  }

  render() {
    //destructure, so no typing out all this.props.todo....)
    const {id, title} = this.props.todo;
    return (
      <div className="todo-item" style={this.getStyle()}>
        <p>
          <input className="checkbox" type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
          { title }
          <button onClick = {this.props.delTodo.bind(this, id)}>x</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}



export default TodoItem
