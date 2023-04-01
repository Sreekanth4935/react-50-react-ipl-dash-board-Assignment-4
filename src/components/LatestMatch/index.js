// Write your code here

import './index.css'
import MatchCard from '../MatchCard'

const LatestMatch = props => {
  const {latestMatchDetails, recentMatches} = props
  //   console.log(latestMatchDetails)
  //   const {competing_team, competing_team_logo} = latestMatchDetails
  const newLatestMatchDetails = {
    competingTeam: latestMatchDetails.competing_team, // alt
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    id: latestMatchDetails.id,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    matchStatus: latestMatchDetails.match_status,
    result: latestMatchDetails.result,
    secondInnings: latestMatchDetails.second_innings,
    umpires: latestMatchDetails.umpires,
    venue: latestMatchDetails.venue,
  }
  //   console.log('rajeshwari', recentMatches)
  //   console.log('sreekanth', newLatestMatchDetails)

  return (
    <div>
      <h1 className="main-heading">Latest Matches</h1>
      <div className="latest-match-container">
        <div className="competitor-container">
          <div>
            <p className="team-name">{newLatestMatchDetails.competingTeam}</p>
            {/* <p className="team-name">{competing_team}</p> */}
            <p className="all">{newLatestMatchDetails.date}</p>
            <p className="all">{newLatestMatchDetails.venue}</p>
            <p className="all">{newLatestMatchDetails.result}</p>
          </div>
          <img
            src={newLatestMatchDetails.competingTeamLogo}
            // src={competing_team_logo}
            // alt={newLatestMatchDetails.competingTeam}
            alt={`latest match ${newLatestMatchDetails.competingTeam}`}
            className="competing-img"
          />
        </div>
        <div className="competitor-details">
          <hr className="line" />
          <p className="heading">First Innings</p>
          <p className="all">{newLatestMatchDetails.firstInnings}</p>
          <p className="heading">Second Innings</p>
          <p className="all">{newLatestMatchDetails.secondInnings}</p>
          <p className="heading">Man Of The Match</p>
          <p className="all">{newLatestMatchDetails.manOfTheMatch}</p>
          <p className="heading">Umpires</p>
          <p className="all">{newLatestMatchDetails.umpires}</p>
        </div>
      </div>
      <ul className="recent-matches-container">
        {recentMatches.map(eachItem => (
          <MatchCard eachItem={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}

export default LatestMatch
