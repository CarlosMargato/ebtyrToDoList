import React, { Component } from 'react'
import Form from '../components/Form'
import Header from '../components/Header'
import Todolist from '../components/Todolist'

class Interface extends Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Todolist />
      </div>
    )
  }
}

export default Interface
