import React from 'react';
import styled, { withTheme } from 'styled-components';
import {
	withEditor,
	Text as TextControl,
	Row as RowControl,
} from '@namespace/services';
import extractStyle from '../styleProvider';
import weakKey from '../utils/weakKey';
import RowColumn from './row-column';
import HeaderColumn from './header-column';

const Wrapper = styled.div``;

const RowWrapper = styled.div`
	display: flex;
`;

const Placeholder = styled.div`
	height: 20px;
	width: 20px;
	border: 2px solid #4a6d7c;
	opacity: 0.6;
`;

const List = props => {
	const { data: { items = [] } = {}, theme, path } = props;
	const { columns = [] } = extractStyle(theme, ['components.list']);

	return (
		<Wrapper>
			{columns.length ? (
				<>
					<RowWrapper>
						{columns.map((columnItem, index) => (
							<HeaderColumn
								theme={columnItem}
								path={`${path}.columns[${index}]`}
								key={weakKey(columnItem)}
							/>
						))}
					</RowWrapper>
					{items.map(dataItem => (
						<RowWrapper key={weakKey(dataItem)}>
							{columns.map((columnItem, index) => (
								<RowColumn
									dataItem={dataItem}
									dataKey={columnItem.dataKey}
									componentKey={columnItem.componentKey}
									theme={columnItem}
									key={weakKey(columnItem)}
									path={`${path}.columns[${index}]`}
								/>
							))}
						</RowWrapper>
					))}
				</>
			) : (
				<Placeholder />
			)}
		</Wrapper>
	);
};

export default withEditor(withTheme(List), {
	stylerControls: (
		<>
			<RowControl path="columns" />
			<TextControl path="style.width" label="Width" />
			<TextControl path="style.height" label="Height" />
			<TextControl path="style.border" label="Border" />
			<TextControl path="style.borderRadius" label="Border radius" />
		</>
	),
});
