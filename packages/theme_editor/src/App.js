import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import TextPage from './pages/text';
import HomePage from './pages/home';

function App() {
	return (
		<div>
			<header className="App-header">Theme Editor</header>
			<div className="main-layout">
				<nav>
					<h3>Components</h3>
					<p>Typography</p>
					<p>Image</p>
					<p>Button</p>
					<p>List</p>
				</nav>
				<main className="workspace-area">
					<Route path="/" exact component={HomePage} />
					<Route path="/text" exact component={TextPage} />
				</main>
			</div>
		</div>
	);
}

export default App;
