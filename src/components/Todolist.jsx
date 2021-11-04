import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteTasks } from '../actions';

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
    const { tasksList, deleteOneTask } = this.props;
    return (
      <>
      {
        tasksList.map((item) => {
          return(
            <>
              <span >Tarefa {item.id+1}:</span>
              <p>{item.task}</p>
              &nbsp;
              <span>Status:</span>
              <p>{item.status}</p>
              &nbsp;
              <button>Editar</button>
              &nbsp;
              <button type='submit' onClick={() => deleteOneTask(item.id)}>Remover</button>
            </>
          )
        })
      }
    </>
    )
  }
}

const mapStateToProps = (state) => ({
  tasksList: state.tasks.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  deleteOneTask: (key) => dispatch(deleteTasks(key))
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
