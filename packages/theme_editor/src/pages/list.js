import React from 'react';
import { List } from '@namespace/components';

const ListPage = () => (
	<div className="editor-area">
		<h3>List compound component</h3>
		<div className="working-area">
			<List
				path="components.list"
				data={{
					items: [
						{
							status: 'online',
							avatar: '/assets/carmack.jpg',
							firstName: 'John',
							lastName: 'Carmack',
							gamesPlayed: 300,
						},
					],
				}}
			/>
		</div>
	</div>
);

export default ListPage;
