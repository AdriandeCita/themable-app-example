import React from 'react';
import { Title, Text } from '@namespace/components';

const TypographyPage = () => (
	<div className="editor-area">
		<h3>Text component</h3>
		<div className="working-area">
			<div>
				<Title path="components.title">Generic Title</Title>
			</div>
			<div>
				<Title path="components.title.small" size="small">
					Small Title
				</Title>
			</div>
			<div>
				<Title path="components.title.medium" size="medium">
					Medium Title
				</Title>
			</div>
			<div>
				<Title path="components.title.large" size="large">
					Large Title
				</Title>
			</div>
			<div>
				<Text path="components.text">Generic Text</Text>
			</div>
		</div>
	</div>
);

export default TypographyPage;
