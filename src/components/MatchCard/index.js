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

  const {competingTeamLogo, result, competingTeam, matchStatus} = newEachItem

  const winOrLoss = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="list-item-container">
      <img
        src={competingTeamLogo}
        // src={competing_team_logo}
        alt={`competing team ${competingTeam}`}
        // alt={`competing team ${competing_team}`}
        className="competing-image"
      />
      {/* <p className="heading2">{competing_team}</p> */}
      <p className="heading2">{competingTeam}</p>
      <p>{result}</p>
      <p className={winOrLoss}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
