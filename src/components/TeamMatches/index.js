// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LatestMatch from '../LatestMatch'

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

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    this.setState({
      teamMatchDetails: {
        teamBannerUrl: data.team_banner_url,
        latestMatchDetails: data.latest_match_details,
        recentMatches: data.recent_matches,
      },
      isLoading: false,
    })
  }

  renderTeamMatches = () => {
    const {teamMatchDetails} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchDetails
    console.log('hi', teamMatchDetails)
    return (
      <>
        <div>
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
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div className={`team-details-container ${id}`}>
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="Rings" color="#00BFFF" height={80} width={80} />
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
