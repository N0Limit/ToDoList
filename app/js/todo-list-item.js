import React from 'react';

export default class Item extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      edit: false,
      value: this.props.task
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleEdit(event){
    this.setState({
       value: event.target.value
     });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.editTask(this.props.index, this.state.value)
    this.setState({ edit: false})
  }


  render() {
    return (
        <li onDoubleClick={() => this.setState({ edit: true })}>

          {this.state.edit ?
          <form onSubmit={this.handleSubmit}>
          <input type="text"
          value={this.state.value}
          onChange={this.handleEdit}
          />
          </form> :
            this.props.task}
         <button onClick={() => this.props.deleteTask(this.props.index)}>Delete</button>
        </li>
    )
  }
}
