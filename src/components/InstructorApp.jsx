import React, {Component} from 'react'
import WelcomComponent from './WelcomeComponent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Gameplay from './Gameplay'

class InstructorApp extends Component {
    render() {
        return (
            <Router>
                <>
                <h1>Tic-Tac-Toe</h1>
                <Switch>
                    <Route path="/" exact component = {WelcomComponent} />
                    <Route path="/tic-tac-toe" exact component = {Gameplay} />
                </Switch>
                </>
            </Router>
        )
    }
}

export default InstructorApp