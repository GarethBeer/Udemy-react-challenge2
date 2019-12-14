import React from "react";

const Validation = props => {
	const { textLength } = props;
	let message = "Text Long enough";

	if (textLength < 7) {
		message = "Text too short";
	}
	return <p>{message}</p>;
};

export default Validation;
