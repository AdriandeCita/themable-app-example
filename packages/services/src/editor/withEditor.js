import React, { useContext, useState } from 'react';
import EditorContext from './context';

const ACTIVE_COMPONENT_WRAPPER = {
	outline: '2px dashed blue',
};
const HOVERED_COMPONENT_WRAPPER = {
	cursor: 'pointer',
	outline: '2px dashed skyblue',
};

const withEditor = (WrappedComponent, config) => props => {
	const { activePath, openEditorToolbar, stylerMode } = useContext(
		EditorContext,
	);

	const [isHovered, setHoverState] = useState(false);

	if (stylerMode !== undefined) {
		const { path } = props;

		const isActive = activePath === path;
		const isChildActive = !isActive && activePath.indexOf(path) === 0;

		const clickHandler = () => {
			if (!isActive) {
				openEditorToolbar(path, config);
			}
		};

		const mouseOverHandler = () => {
			if (!isActive && !isHovered) {
				setHoverState(true);
			}
		};

		const mouseLeaveHandler = () => {
			if (!isActive && isHovered) {
				setHoverState(false);
			}
		};

		let pointerEventStyles = {};
		if (isHovered) {
			pointerEventStyles = HOVERED_COMPONENT_WRAPPER;
		}
		if (isActive) {
			pointerEventStyles = ACTIVE_COMPONENT_WRAPPER;
		}

		return stylerMode ? (
			<div
				style={pointerEventStyles}
				onClick={isActive || isChildActive ? undefined : clickHandler}
				onKeyPress={
					isActive || isChildActive ? undefined : clickHandler
				}
				onMouseOver={mouseOverHandler}
				onMouseLeave={mouseLeaveHandler}
				onFocus={() => {}}
			>
				<WrappedComponent {...props} />
			</div>
		) : (
			<WrappedComponent {...props} />
		);
	}

	return <WrappedComponent {...props} />;
};

export default withEditor;
