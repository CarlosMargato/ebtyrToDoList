import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Cadastro extends Component {
  constructor(props) {
    super(props);

    this.handlechange = this.handlechange.bind(this);

    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  handlechange({ target: { value, name } }) {
    const format = RegExp(/[a-z0-9]+@[a-z0-9]+\.[a-z0-9]{2,3}(\.[a-z0-9]+)?$/);
    if (name === 'email' && format.test(value)) {
      this.setState({
        email: value,
      });
    }
    if (name === 'name') {
      this.setState({
        name: value,
      });
    }
    if (name === 'password' && value.length >= 6) {
      this.setState({
        password: value,
      });
    }
  }
  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="name">
            <span>Nome:</span>
            &nbsp;
            <input
              type="text"
              id="name"
              name="name"
              data-testid="input-player-name"
              onChange={ this.handlechange }
            />
            {(name)?"ok!":'insira um nome'}
            <br/>
          </label>
          <label htmlFor="email">
            <span>E-mail:</span>
            &nbsp;
            <input
              type="email"
              name="email"
              id="email"
              onChange={ this.handlechange }
            />
            {(email)?"ok!":'insira o formato correto do email'}
            <br/>
          </label>
          <label htmlFor="password">
            <span>Senha:</span>
            &nbsp;
            <input
              type="text"
              id="password"
              name="password"
              onChange={ this.handlechange }
            />
            {(password)?"ok!":'insira uma senha de 6 numeros ou mais'}
            <br/>
          </label>
        </form>
        <Link
            to={(name && email && password)?"/realizado":'#'}
             type="submit"
            >
            {(name && email && password)?"Cadastrar":'o cadastro não está completo'}
        </Link>
      </div>
    )
  }
}

export default Cadastro
