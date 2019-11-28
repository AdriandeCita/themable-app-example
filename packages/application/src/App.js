import React from 'react';
import './App.css';
import { ThemeProviderService } from '@namespace/services';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
	return (
		<ThemeProviderService>
			<BrowserRouter>
				<div>
					<header className="header-main">
						The Application&trade;
					</header>
					<div className="main-layout">
						<nav className="navigation-sidebar">
							<h3>Navigation</h3>
							<ul>
								<li>
									<Link to="/list">List</Link>
								</li>
								<li>
									<Link to="/about">About</Link>
								</li>
							</ul>
						</nav>
						<main className="main-area">
							<div className="list">
								<header className="table-header">
									<div className="column">Status</div>
									<div className="column">Avatar</div>
									<div className="column">First Name</div>
									<div className="column">Last Name</div>
									<div className="column">Games played</div>
								</header>

								<div className="row">
									<div className="column">**Online</div>
									<div className="column">
										<div className="avatar">
											<img
												src="http://localhost:3012/assets/carmack.jpg"
												alt=""
											/>
										</div>
									</div>
									<div className="column">John</div>
									<div className="column">Carmack</div>
									<div className="column">300</div>
								</div>

								<div className="row">
									<div className="column">**Offline</div>
									<div className="column">
										<div className="avatar">
											<img
												src="http://localhost:3012/assets/levine.jpg"
												alt=""
											/>
										</div>
									</div>
									<div className="column">Ken</div>
									<div className="column">Levine</div>
									<div className="column">300</div>
								</div>

								<div className="row">
									<div className="column">**Online</div>
									<div className="column">
										<div className="avatar">
											<img
												src="http://localhost:3012/assets/spector.jpg"
												alt=""
											/>
										</div>
									</div>
									<div className="column">Warren</div>
									<div className="column">Spector</div>
									<div className="column">300</div>
								</div>

								<div className="row">
									<div className="column">**Online</div>
									<div className="column">
										<div className="avatar">
											<img
												src="http://localhost:3012/assets/romero.jpg"
												alt=""
											/>
										</div>
									</div>
									<div className="column">John</div>
									<div className="column">Romero</div>
									<div className="column">300</div>
								</div>
							</div>
						</main>
					</div>
				</div>
			</BrowserRouter>
		</ThemeProviderService>
	);
}

export default App;
