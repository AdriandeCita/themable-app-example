import React from 'react';
import styled from 'styled-components';
import Text from '../text';
import Image from '../image';
import CellWrapper from './cell-wrapper';

const Placeholder = styled.div`
	height: 10px;
	width: 10px;
	border: 1px solid #4a6d7c;
	opacity: 0.8;
`;

const RowColumn = props => {
	const { dataItem, dataKey, componentKey, theme, path } = props;

	let Component;

	switch (componentKey) {
		case 'image':
			Component = (
				<Image
					theme={theme.column}
					path={`${path}.column.components.image`}
					source={dataItem[dataKey]}
				/>
			);
			break;
		case 'text':
			Component = (
				<Text
					theme={theme.column}
					path={`${path}.column.components.text`}
				>
					{dataItem[dataKey]}
				</Text>
			);
			break;
		default:
			Component = <Placeholder />;
	}

	return <CellWrapper theme={theme}>{Component}</CellWrapper>;
};

export default RowColumn;
