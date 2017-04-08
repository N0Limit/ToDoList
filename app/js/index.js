import React from 'react';
import ReactDOM from 'react-dom';
import TodosList from './todo-list';
import CreateTodo from './create-todos';

const todos = [
{
    task: 'make React tutorial',

}
];

class TodoBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos
    };

  }

  render() {
    return(
      <div className="todo-box">
        <h1 className="todo-text">React Todolist</h1>
           <TodosList
           task={this.state.todos}
           deleteTask={this.deleteTask}
            />

          <CreateTodo todos={this.state.todos} createTask={this.createTasks.bind(this)} />


      </div>
    );
  }

  createTasks(task){
    if(task){
    this.state.todos.push({
            task
        });}
    this.setState({todos: this.state.todos});
  }

  deleteTask(index, e){
    alert(this.state.todos)
  }

}

ReactDOM.render(
  <TodoBox />,
  document.getElementById('root')
);
