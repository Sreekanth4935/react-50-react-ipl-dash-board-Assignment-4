// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LatestMatch from '../LatestMatch'

const colorList = ['one', 'two', 'three', 'four', 'five']

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamMatchDetails: {},
  }

  componentDidMount() {
    console.log(this.props)
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log('id', id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    // console.log('hi', data)

    const newRandomNumber = Math.floor(Math.random() * 5)

    this.setState({
      teamMatchDetails: {
        teamBannerUrl: data.team_banner_url,
        latestMatchDetails: data.latest_match_details,
        recentMatches: data.recent_matches,
      },
      isLoading: false,
      randomNumber: newRandomNumber,
    })
  }

  renderTeamMatches = () => {
    const {teamMatchDetails} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchDetails
    console.log('hi', teamMatchDetails)
    return (
      <>
        <div>
          {/* alt should be modified */}
          <img
            src={teamBannerUrl}
            alt="team banner"
            className="team-banner-img"
          />
        </div>
        <LatestMatch
          latestMatchDetails={latestMatchDetails}
          teamBannerUrl={teamBannerUrl}
          recentMatches={recentMatches}
        />
      </>
    )
  }

  render() {
    const {isLoading, randomNumber} = this.state

    return (
      //   <div className="team-details-container">
      <div className={`team-details-container ${colorList[randomNumber]}`}>
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
