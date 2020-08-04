import React, { useContext } from 'react';
import EditorContext from '../context';

const defaultColumn = {
	style: {
		width: '120px',
		padding: '0.5em 1em',
	},
	componentKey: 'text',
};

const Row = props => {
	const { path } = props;
	const { update, getCurrentValue } = useContext(EditorContext);

	const insertAtTheStart = () => {
		const columns = getCurrentValue(path) || [];
		update({ path, value: [defaultColumn, ...columns] });
	};

	const insertAtTheEnd = () => {
		const columns = getCurrentValue(path) || [];
		update({ path, value: [...columns, defaultColumn] });
	};

	return (
		<div>
			<span>Insert a column</span>
			<div
				style={{
					display: 'flex',
					justifyConten: 'space-between',
				}}
			>
				<button type="button" onClick={insertAtTheStart}>
					At the start
				</button>
				<button type="button" onClick={insertAtTheEnd}>
					At the end
				</button>
			</div>
		</div>
	);
};

export default Row;
