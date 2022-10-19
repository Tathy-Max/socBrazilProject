import React from 'react';
import { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { Button, Modal } from 'antd';
import '../../speakers.json';

const SpeakerD = ({ speakers }) => {
	const [open, setOpen] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [bounds, setBounds] = useState({
		left: 0,
		top: 0,
		bottom: 0,
		right: 0,
	});
	const draggleRef = useRef(null);

	const showModal = () => {
		setOpen(true);
	};

	const handleOk = (e) => {
		console.log(e);
		setOpen(false);
	};

	const handleCancel = (e) => {
		console.log(e);
		setOpen(false);
	};

	const onStart = (_event, uiData) => {
		const { clientWidth, clientHeight } = window.document.documentElement;
		const targetRect = draggleRef.current?.getBoundingClientRect();

		if (!targetRect) {
			return;
		}

		setBounds({
			left: -targetRect.left + uiData.x,
			right: clientWidth - (targetRect.right - uiData.x),
			top: -targetRect.top + uiData.y,
			bottom: clientHeight - (targetRect.bottom - uiData.y),
		});
	};

	return (
		<>
			<Button onClick={showModal}>Speaker</Button>
			{speakers && (
				<Modal
					footer={null}
					title={
						<div
							style={{
								width: '100%',
								cursor: 'move',
							}}
							onMouseOver={() => {
								if (disabled) {
									setDisabled(false);
								}
							}}
							onMouseOut={() => {
								setDisabled(true);
							}}
							// fix eslintjsx-a11y/mouse-events-have-key-events
							// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
							onFocus={() => {}}
							onBlur={() => {}}
							// end
						>
							{/* Draggable Modal */}
							<b>{speakers.name} Experience</b>
						</div>
					}
					open={open}
					onOk={handleOk}
					onCancel={handleCancel}
					modalRender={(modal) => (
						<Draggable
							disabled={disabled}
							bounds={bounds}
							onStart={(event, uiData) => onStart(event, uiData)}
						>
							<div ref={draggleRef}>{modal}</div>
						</Draggable>
					)}
				>
					<p>{speakers.aboutS}</p>
				</Modal>
			)}
		</>
	);
};

export default SpeakerD;
