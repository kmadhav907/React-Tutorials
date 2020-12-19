import React, { Component } from 'react'

class AddNinja extends Component {
  state = { name: null, age: null, place: null }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNinja(this.state)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' onChange={this.handleChange} />
          <label htmlFor='name'>Age:</label>
          <input type='text' id='age' onChange={this.handleChange} />
          <label htmlFor='name'>Place:</label>
          <input type='text' id='place' onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
export default AddNinja
