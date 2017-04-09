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
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  render() {
    return(
      <div>
      <h1>React Todolist</h1>
        <CreateTodo  createTask={this.createTasks.bind(this)} />

        <TodosList
          task={this.state.todos}
          deleteTask={this.deleteTask}
          editTask={this.editTask}
          />
      </div>

    );
  }

  createTasks(task){
    if(task){
    this.state.todos.push({
            task
        });}
    this.setState({
      todos: this.state.todos
    });
  }

  deleteTask(index){
    let itemsList = this.state.todos;
    itemsList.splice(index, 1);
    this.setState({
      todos: this.state.todos
    });
  }

  editTask(index, task){


    let itemsList = this.state.todos;
    itemsList[index].task = task;

    this.setState({
      todos: this.state.todos
    });
  }
}

ReactDOM.render(
  <TodoBox />,
  document.getElementById('root')
);
