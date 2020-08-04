import React, { useContext } from 'react';
import EditorContext from '../context';

const ColumnRemover = () => {
	const { removeCurrentSubtree } = useContext(EditorContext);

	return (
		<div>
			<button type="button" onClick={removeCurrentSubtree}>
				Remove column
			</button>
		</div>
	);
};

export default ColumnRemover;
