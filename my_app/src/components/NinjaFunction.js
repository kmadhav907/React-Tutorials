import React from 'react'

const NinjaFunction = ({ ninjas, deleteNinja }) => {
  //   const ninjalist = ninjas.map((ninja) => {
  //     if (ninja.age > 20) {
  //       return (
  // <div className='ninja' key={ninja.id}>
  //   Name: {ninja.name} <br />
  //   Age: {ninja.age} <br />
  //   Place: {ninja.place} <br />
  //   <br></br>{' '}
  // </div>
  //       )
  //     }
  //   })

  const ninjaList = ninjas.map((ninja) => {
    return ninja.age > 20 ? (
      <div className='ninja' key={ninja.id}>
        Name: {ninja.name} <br />
        Age: {ninja.age} <br />
        Place: {ninja.place} <br />
        <br></br>{' '}
        <button
          onClick={() => {
            deleteNinja(ninja.id)
          }}
        >
          Delete Ninja
        </button>
      </div>
    ) : null
  })
  return <div>{ninjaList}</div>
}

export default NinjaFunction
