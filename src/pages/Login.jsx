import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogin } from '../actions/index';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handlechange = this.handlechange.bind(this);
  }

  handlechange({ target: { value, name } }) {
    const format = RegExp(/[a-z0-9]+@[a-z0-9]+\.[a-z0-9]{2,3}(\.[a-z0-9]+)?$/);
    if (name === 'email' && format.test(value)) {
      this.setState({
        email: value,
      });
    } else if (name === 'password' && value.length >= 6) {
      this.setState({
        password: value,
      });
    }
  }

  render() {
    const { password, email } = this.state;
    const {username} = this.props;
    return (
      <div>
        <form className="login-form">
          <label htmlFor="email">
            <span>E-mail:</span>
            &nbsp;
            <input
              type="email"
              name="email"
              id="email"
              onChange={ this.handlechange }
            />
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
          </label>
          <nav>
            <Link
              to={(email && password)?"/interface":'#'}
              type="submit"
              onClick={ () => username({ email, password }) }
              >
                {(email && password)?"logar":'    '}
            </Link>
            <Link to='/cadastrar'>Cadastre-se!</Link>
          </nav>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  username:(values) => dispatch(userLogin(values)),
})

export default connect(null,mapDispatchToProps)(Login);
