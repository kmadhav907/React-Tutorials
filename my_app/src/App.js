import React, { Component } from 'react'
import AddNinja from './components/AddNinja'

import NinjaFunction from './components/NinjaFunction'

class App extends Component {
  state = {
    ninjas: [
      { name: 'Madhav', age: 20, place: 'Karkala', id: 1 },
      { name: 'Bhatmaam', age: 21, place: 'Mangalore', id: 2 },
      { name: 'Avinash', age: 22, place: 'Nitte', id: 3 },
    ],
  }
  addNinja = (ninja) => {
    console.log(ninja)
    ninja.id = Math.random()
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas,
    })
  }
  deleteNinja = (id) => {
    console.log(id)
    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: ninjas,
    })
  }
  componentDidMount() {
    console.log('Component mounted')
  }
  componentDidUpdate(prevState, prevProps) {
    console.log('Component Updated')
    console.log(prevProps, prevState)
  }
  render() {
    return (
      <div className='App'>
        <h1>My First React App</h1>
        <NinjaFunction
          ninjas={this.state.ninjas}
          deleteNinja={this.deleteNinja}
        />
        <br />
        <br />
        <AddNinja addNinja={this.addNinja} />
        <br />
      </div>
    )
  }
}

export default App
