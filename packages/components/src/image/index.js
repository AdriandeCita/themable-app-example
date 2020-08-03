import React from 'react';
import styled, { withTheme } from 'styled-components';
import { withEditor, Text as TextControl } from '@namespace/services';
import extractStyle from '../styleProvider';

const getStyle = ({ theme }) => extractStyle(theme, ['components.image.style']);

const View = styled.div`
	display: flex;
	overflow: hidden;
	width: 50px;
	height: 50px;

	${props => getStyle(props)}
`;

const Placeholder = styled.div`
	width: 100%;
	height: 100%;
	background-color: #4a6d7c;
	opacity: 0.6;
`;

const Image = props => {
	const { source } = props;

	return (
		<View>{source ? <img src={source} alt="" /> : <Placeholder />}</View>
	);
};

export default withEditor(withTheme(Image), {
	stylerControls: (
		<>
			<TextControl path="style.width" label="Width" />
			<TextControl path="style.height" label="Height" />
			<TextControl path="style.border" label="Border" />
			<TextControl path="style.borderRadius" label="Border radius" />
		</>
	),
});
