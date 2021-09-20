// core libraries
import React, { Component } from 'react'
// third party libraries
// custom
import { readLocalStorage, writeLocalStorage } from './utils/localStorage'
import './App.scss'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: {
				firstName: null,
				lastName: null,
				email: null,
				isLoggedIn: false,
			},
			count: 0,
		}

    this.increment = this.increment.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
	}

  increment () {
    this.setState(prevState => ({ count: prevState.count + 1}))
  }

  login() {
    this.setState(prevState => ({
      ...prevState,
      user: {
				firstName: 'Aran',
				lastName: 'Beitia',
				email: 'ab@holi.com',
				isLoggedIn: true,
			}
    }))
  }

  logout() {
    this.setState({
      user: {
				firstName: null,
				lastName: null,
				email: null,
				isLoggedIn: false,
			},
    })
  }

  componentDidMount() {
    const lastState = readLocalStorage("app-state")
    this.setState({ 
      // user: lastState.user,
      // count: lastState.count // es lo mismo que la siguiente linea
      ...lastState
     })
    console.log(lastState);
    console.log('mounted');
  }

  componentDidUpdate() {
    writeLocalStorage('app-state', JSON.stringify(this.state))
    console.log('updated');
  }

  // componentWillUnmount() {
  //   console.log('unmounted');
  // }

	render() {
    const { user, count } = this.state
		return (
			<main className="App">
				<p>Counter: {count}</p>
        <button onClick={this.increment}>Increment</button>
        <div>
        <button onClick={this.login} className={user.isLoggedIn ? 'is-hidden': ''}>login</button>
        <button onClick={this.logout} className={!user.isLoggedIn ? 'is-hidden': ''}>logout</button>
          {this.state.user.firstName && <p>{this.state.user.firstName}</p>}
        </div>
			</main>
		)
	}
}

export default App
