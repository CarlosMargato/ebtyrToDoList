import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Realizado extends Component {
  render() {
    return (
      <div>
        <h1>Cadastro realizado</h1>
        <Link to='/'>Voltar a tela inicial!</Link>
      </div>
    )
  }
}

export default Realizado
