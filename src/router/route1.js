import { BrowserRouter as Router, Link, NavLink, Route, Switch, Redirect } from 'react-router-dom';
import LinkStyle from '../router/styleLink'


const styles = { display: 'flex', justifyContent: 'space-around', width: 300 }
const activeColorLink = { color: 'red', display: "block" };
const colorLink = { color: 'black', display: "block" };


const HomePage = () => <h1>App</h1>
const RootPage = () => <h1>Root</h1>
const AboutPage = () => <h1>About</h1>
const ContPage = ({ name }) => <h1>ContPage with extra props  {name}</h1>
const MenuPage = () => <h1>MENU</h1>
const NotFound = () => <h1>NotFound</h1>



const Navigation = () => (
	<nav style={styles}>
		<Link to="/home">Home</Link>
		<Link to="/article/:article?/:subArticle">Article</Link>

		<Link to="/about">About</Link>
		<LinkStyle to="/contact" className='defaultLink' activeClassName='colorLink'>Contact</LinkStyle>
		<NavLink to="/menu" style={colorLink} activeStyle={activeColorLink}>Menu</NavLink>
	</nav>
)


export const Example = () => {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route path="/menu" component={MenuPage} />
				<Route exact path="/" component={RootPage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/home" component={HomePage} />
				<Route path="/contact" render={(props) => <ContPage{...props} name='Sveta' />} />
				<Route path="/article/:article?/:subArticle" render={({ match, location, history }) => {
					return (
						<>
							<p>Root</p>
							<span>{JSON.stringify(match)}</span>
							<span>{JSON.stringify(history)}</span>
							<span>{JSON.stringify(location)}</span>

						</>
					)
				}} />
				<Redirect to="/home" />
/*				<Route component={NotFound} />
				*/
			</Switch>


		</Router>
	)
}