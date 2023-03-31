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
    // console.log('id', id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    // console.log('hi', data)

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
    const {teamBannerUrl, latestMatchDetails} = teamMatchDetails
    // const new
    console.log('teamBannerUrl', teamBannerUrl)
    return (
      <>
        <div>
          {/* alt should be modified */}
          <img src={teamBannerUrl} alt="j" className="team-banner-img" />
        </div>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
      </>
    )
  }

  render() {
    const {isLoading, teamMatchDetails} = this.state

    return (
      <div className="team-details-container">
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
