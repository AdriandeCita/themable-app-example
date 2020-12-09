import React from 'react';
import './App.css';
import { ThemeProviderService } from '@namespace/services';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import ListPage from './pages/list';
import AboutPage from './pages/about';
import CustomListPage from './pages/customList';
import ThemePage from './pages/theme';

function App() {
	return (
		<ThemeProviderService>
			<BrowserRouter>
				<div>
					<header className="header-main">
						The Application&trade;
						<Link className="link" to="/theme">Show my theme</Link>
					</header>
					<div className="main-layout">
						<nav className="navigation-sidebar">
							<h3>Navigation</h3>
							<ul>
								<li>
									<Link to="/list">List</Link>
								</li>
								<li>
									<Link to="/custom-list">Custom List</Link>
								</li>
								<li>
									<Link to="/about">About</Link>
								</li>
							</ul>
						</nav>
						<main className="main-area">
							<Route path="/about" exact component={AboutPage} />
							<Route path="/list" exact component={ListPage} />
							<Route path="/theme" exact component={ThemePage} />
							<Route
								path="/custom-list"
								exact
								component={CustomListPage}
							/>
							<Route path="/" exact component={ListPage} />
						</main>
					</div>
				</div>
			</BrowserRouter>
		</ThemeProviderService>
	);
}

export default App;
