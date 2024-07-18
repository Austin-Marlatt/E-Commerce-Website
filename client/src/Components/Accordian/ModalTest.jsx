import React, { useState } from 'react';
import { Nav, Modal, Tab } from "react-bootstrap";

function Application() {
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<div
			style={{
				textAlign: "center",
				display: "block",
				padding: 30,
				margin: "auto",
			}}
		>
			<button type="button" onClick={handleOpen}>
				Click Me to Open Modal
			</button>
			<Modal show={open} onHide={handleClose}>
				<>
					
                    <h1>GFG</h1>
					<h3>A computer science portal!</h3>
				</>
			</Modal>
		</div>
	);
};
export default Application;

