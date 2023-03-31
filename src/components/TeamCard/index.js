// import React from 'react'

const TeamCard = props => {
  const {eachTeam} = props
  console.log(eachTeam)

  return (
    <li>
      <h1>{eachTeam.name}</h1>
      <p>{eachTeam.description}</p>
    </li>
  )
}

export default TeamCard
