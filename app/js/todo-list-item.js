import React from 'react';

export default class TodosListItem extends React.Component {


  render() {
    return (
      <div>
        <li className="todo-items">
          {this.props.task}
         </li>
         <button onClick={this.props.deleteTask.bind(this)}>dasd</button>
        </div>


    )
  }

}
