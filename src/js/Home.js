import React, {Component} from "react";
import Linkfile from "../Linkfile/Linkfile";
import Game from "./Game/Game";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class Home extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<div className="App">
						<Route exact path="/" component={Linkfile}/>
						<Route exact path="/memorygame" component={Game}/>
					</div>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Home;

