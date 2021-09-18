// ES6
import React, { Component } from 'react'

import { Button, NavBar, NavBarItem } from './components'

import './App.scss'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: props.initValue ? props.initValue : 0,
      // songList: [],
      // isLoaded: false,
		}
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
	}

  increment () {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  decrement () {
    this.setState(prevState => ({
      count: prevState.count - 1
    }))
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ count: 100 })
    }, 2000);
  }

  componentWillUnmount() {
    console.log('unmounted');
  }
  
  componentDidUpdate() {
    console.log('updated');
    console.log(`Counter value is now: ${this.state.count}`);
  }

	render() {
    // const { count } = this.state
		return (
			<>
				<NavBar title="My first title" loggedIn username="Joan">
					<NavBarItem value="Home" />
					<NavBarItem value="About Us" />
					<NavBarItem value="Help" />
				</NavBar>
        <main>
          <p>Counter: {this.state.count}</p>
          <Button handleClick={this.increment}>Increment</Button>
          <Button handleClick={this.decrement}>decrement</Button>
        </main>
			</>
		)
	}
}
//   const fullName = "John Doe";

//   let element;
//   if (fullName === "John Doe") {
//     element = <h1>Welcome back, {fullName}</h1>;
//   } else {
//     element = <h1>Hello, {fullName}</h1>;
//   }

//   return (

//   );
// }

// function PostList() {
// 	const posts = [
// 		{ id: 1, title: 'post 1' },
// 		{ id: 2, title: 'post 2' },
// 	]

// 	return posts.map((el) => <div key={el.id}>{el.title}</div>)
// }

export default App
