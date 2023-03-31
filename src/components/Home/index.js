// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

const teamsApiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {isLoading: true, teamsList: []}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch(teamsApiUrl)
    const data = await response.json()
    console.log(data)

    this.setState({
      teamsList: data.teams.map(eachTeam => ({
        id: eachTeam.id,
        name: eachTeam.name,
        teamImageUrl: eachTeam.team_image_url,
      })),
      isLoading: false,
    })
  }

  render() {
    const {isLoading, teamsList} = this.state
    console.log(teamsList)

    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <>
            <div className="logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1>IPL Dashboard</h1>
            </div>
            <ul className="ul-container">
              {teamsList.map(eachTeam => (
                <TeamCard eachTeam={eachTeam} key={eachTeam.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
