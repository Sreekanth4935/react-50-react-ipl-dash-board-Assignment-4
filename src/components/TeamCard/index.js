// import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="list-item">
        <img src={teamImageUrl} alt={name} className="team-image" />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
