// Write your code here

import './index.css'

const MatchCard = props => {
  const {eachItem} = props
  const newEachItem = {
    id: eachItem.id,
    competingTeam: eachItem.competing_team,
    result: eachItem.result,
    matchStatus: eachItem.match_status,
    competingTeamLogo: eachItem.competing_team_logo,
  }
  const {
    id,
    competingTeamLogo,
    result,
    competingTeam,
    matchStatus,
  } = newEachItem

  const winOrLoss = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="list-item-container">
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="competing-image"
      />
      <h1 className="heading2">{competingTeam}</h1>
      <p>{result}</p>
      <p className={winOrLoss}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
