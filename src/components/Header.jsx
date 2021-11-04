import React, { Component } from 'react'
import { connect } from 'react-redux';


class Header extends Component {


  render() {
    const { tasksList } = this.props;
    let date = new Date();
    return (
      <div>
        <h1>Lista a Fazer</h1>
        <h5>Usuário: {tasksList.email}</h5><p>{`Logado em ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tasksList: state.user,
});

export default connect(mapStateToProps)(Header)
