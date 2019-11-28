import React, { useContext, useState, useEffect } from 'react';
import EditorContext from '../context';

const Text = props => {
	const { path, label } = props;
	const { update, theme, getCurrentValue } = useContext(EditorContext);
	const [currentValue, setCurrentValue] = useState('');

	useEffect(() => {
		setCurrentValue(getCurrentValue(path));
	}, [getCurrentValue, path, theme]);

	const handleChange = e => {
		update({ path, value: e.target.value });
	};

	return (
		<div>
			<label htmlFor={`styler-${path}`}>{label}</label>
			<input
				onChange={handleChange}
				value={currentValue}
				id={`styler-${path}`}
			/>
		</div>
	);
};

export default Text;
