import React from 'react';
import TodosListItem from './todo-list-item';


export default class TodosList extends React.Component {
  renderItems() {
    let values = this.props.task;
    return values.map((todo, index)=> <TodosListItem key={index} {...todo}  index={index} deleteTask={this.props.deleteTask} />)
}

  render() {
     return (
          <ul>
          {this.renderItems()}
          </ul>
     );
 }
}
