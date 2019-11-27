import React from 'react';
import './App.css';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import TextPage from './pages/text';
import HomePage from './pages/home';

function App() {
	return (
		<BrowserRouter>
			<div>
				<header className="App-header">Theme Editor</header>
				<div className="main-layout">
					<nav>
						<h3>Components</h3>
						<ul>
							<li>
								<Link to="/text">Typography</Link>
							</li>
							<li>
								<Link to="/">Image</Link>
							</li>
							<li>
								<Link to="/">Button</Link>
							</li>
							<li>
								<Link to="/">List</Link>
							</li>
						</ul>
					</nav>
					<main className="workspace-area">
						<Route path="/" exact component={HomePage} />
						<Route path="/text" exact component={TextPage} />
					</main>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
