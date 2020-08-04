import React from 'react';
import { withTheme } from 'styled-components';
import {
	Text as TextControl,
	Select as SelectControl,
	withEditor,
} from '@namespace/services';
import EditableText from '../editableText';
import { ColumnRemover as ColumnRemoverControl } from '../../../services/src';
import CellWrapper from './cell-wrapper';

const HeaderColumn = props => {
	const {
		theme,
		theme: { header },
		path,
	} = props;

	return (
		<CellWrapper theme={theme}>
			<EditableText
				theme={header}
				path={`${path}.header.components.editableText`}
			/>
		</CellWrapper>
	);
};

export default withEditor(withTheme(HeaderColumn), {
	stylerControls: (
		<>
			<SelectControl
				path="componentKey"
				label="Component"
				options={[
					{
						label: 'Text component',
						value: 'text',
					},
					{
						label: 'Image component',
						value: 'image',
					},
				]}
			/>
			<TextControl path="dataKey" label="Data key" />
			<TextControl path="style.width" label="Column width" />
			<SelectControl
				path="style.justifyContent"
				label="Horizontal align"
				options={[
					{
						label: 'Left',
						value: 'flex-start',
					},
					{
						label: 'Center',
						value: 'center',
					},
					{
						label: 'Right',
						value: 'flex-end',
					},
				]}
			/>
			<TextControl path="style.padding" label="Paddings" />
			<br/>
			<br/>
			<ColumnRemoverControl />
		</>
	),
});
