import React, { Component } from "react"
import { Card } from 'semantic-ui-react'
import {  BrowserRouter as Router, Link, Route } from 'react-router-dom';

class Linkfile extends Component {
	render() {
		return (
			<div>
			<div style={{textAlign: 'center', justifyContent:'center'}}>
				<h1><b> MAP-G </b> </h1>
			</div>
				<div class="container">
					<nav>
						<Card.Group itemsPerRow={2}>
							<Card>
								<Card.Content>
									<Link to="/memorygame">Card Matching</Link>
								</Card.Content>
							</Card>
						</Card.Group>
				</nav>
			</div>
			</div>
		)
	}
}
export default Linkfile;