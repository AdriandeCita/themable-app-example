import React, { useContext } from 'react';
import EditorContext from '../context';

const Select = props => {
	const { options, label, path } = props;
	const { update } = useContext(EditorContext);

	const handleChange = e => {
		update({ path, value: e.target.value });
	};

	return (
		<div>
			<label htmlFor={`styler-${path}`}>{label}</label>
			<select onChange={handleChange} id={`styler-${path}`}>
				{options.map(({ label: optionLabel, value }) => (
					<option value={value} key={`option-${value}`}>
						{optionLabel}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
