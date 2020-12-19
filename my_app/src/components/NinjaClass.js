import React, { Component } from 'react'

class NinjaClass extends Component {
  render() {
    const { ninjas } = this.props
    const ninjalist = ninjas.map((ninja) => {
      return (
        <div className='ninja' key={ninja.id}>
          Name: {ninja.name} <br />
          Age: {ninja.age} <br />
          Place: {ninja.place} <br />
          <br />
        </div>
      )
    })
    return <div>{ninjalist}</div>
  }
}

export default NinjaClass
