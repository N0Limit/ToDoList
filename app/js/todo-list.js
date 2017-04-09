import React from 'react';
import Item from './todo-list-item';


export default class TodosList extends React.Component {
  renderItems() {
    let values = this.props.task;
    return values.map((todo, index)=> <Item key={index} {...todo}  index={index} deleteTask={this.props.deleteTask} editTask={this.props.editTask}/>)
}

  render() {
     return (
          <ul>
          {this.renderItems()}
          </ul>
     );
 }
}
