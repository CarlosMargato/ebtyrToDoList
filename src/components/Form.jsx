import React, { Component } from 'react'
import { connect } from 'react-redux';
import { tasksList } from '../actions';

export class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: 0,
      task:"",
      status:"pendente",
    }
    this.typeChecker = this.typeChecker.bind(this);
    this.clickSend = this.clickSend.bind(this);
  }

  typeChecker({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  clickSend(e) {
    e.preventDefault();
    const { id, task, status } = this.state;
    const { tasksDispatch } = this.props;
    tasksDispatch({ id, task, status });
    this.setState({
      id: id + 1,
      task:"",
      status:"pendente",
    });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="addTask">
            <span>Tarefa:</span>
            &nbsp;
            <input
              type="text"
              name="task"
              id="addTask"
              onChange={ this.typeChecker }
            />
          </label>
          <label htmlFor="select">
            Status:
            <select id='select' name="status" onChange={ this.typeChecker }>
              <option value="pendente"  selected>pendente</option>
              <option value="em andamento">em andamento</option>
              <option value="pronto">pronto</option>
            </select>
          </label>
          <button id="Salvar" type="submit" onClick = { this.clickSend }>Salvar</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
tasksDispatch: (values) => dispatch(tasksList(values))  
})

export default connect(null, mapDispatchToProps)(Form)