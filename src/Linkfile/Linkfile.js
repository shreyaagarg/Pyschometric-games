import React, { Component } from "react"
import {  BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Game from "../js/Game/Game";

class Linkfile extends Component {
	render() {
		return (
			<Router>
			<div class="container">
				<nav>
					<Link to="/">Home</Link>
					<Link to="/memorygame">MemoryGame</Link>
				</nav>
				<Route
					path="/"
				/>
				<Route
					path="/memorygame">
					<Game/>
				</Route>
			</div>
			</Router>
		);
	}
}
export default Linkfile;