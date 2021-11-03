import React, { Component } from 'react'

class Todolist extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: 0,
      task:"",
      status:"",
    }
  }

  render() {
    const { task, status } = this.state;
    return (
      <>
        <p>
          <span>Tarefa:</span>
          <p>{task}</p>
        </p>
        <p>
          <span>Status:</span>
          <p>{status}</p>
        </p>
      </>
    )
  }
}

export default Todolist
