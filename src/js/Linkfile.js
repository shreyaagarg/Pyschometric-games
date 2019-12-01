import { Link } from 'react-router-dom';
import Game from "./Game/Game";

class Linkfile extends Component {
	render() {
		return (
			<div class="container">
				<nav>
					<Link to="/">Home</Link>
					<Link to="/memorygame">MemoryGame</Link>
				</nav>
				<Route
					path="/"
					component={HomeComponent}
					exact
				/>
				<Route
					path="/memorygame"
					component={Game}
				/>
			</div>
		);
	}
}
export default Linkfile;