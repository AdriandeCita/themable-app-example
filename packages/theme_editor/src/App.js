import React from 'react';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { ThemeProviderService } from '@namespace/services';
import Workspace from './components/workspace';
import EditorProvider from './components/editorProvider';
import Header from './components/header';

function App() {
	return (
		<ThemeProviderService>
			<BrowserRouter>
				<EditorProvider>
					<div>
						<Header />
						<div className="main-layout">
							<nav className="navigation-sidebar">
								<h3>Components</h3>
								<ul>
									<li>
										<Link to="/text">Text</Link>
									</li>
									<li>
										<Link to="/text-editable">
											Editable Content
										</Link>
									</li>
									<li>
										<Link to="/typography">Typography</Link>
									</li>
									<li>
										<Link to="/image">Image</Link>
									</li>
									<li>
										<Link to="/list">List</Link>
									</li>
								</ul>
							</nav>
							<Workspace />
						</div>
					</div>
				</EditorProvider>
			</BrowserRouter>
		</ThemeProviderService>
	);
}

export default App;
