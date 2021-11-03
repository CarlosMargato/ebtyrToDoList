import React, { Component } from 'react'

export class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: 0,
      task:"",
      status:"pendente",
    }
    this.typeChecker = this.typeChecker.bind(this);
  }

  typeChecker({ target: { name, value } }) {
    this.setState({
      [name]: value,
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
          <button id="Salvar" type="submit">Salvar</button>
        </form>
      </div>
    )
  }
}

export default Form