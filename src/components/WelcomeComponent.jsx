import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class WelcomComponent extends Component {
    render() {
        return(
            <div className="welcome-page">
                <br></br>
                <h1>Welcome to the most famous game in the world!!!</h1>
                <h2>Click here to play you game: <Link to="/tic-tac-toe">Here</Link>.</h2>
            </div>
        )
    }
}

export default WelcomComponent