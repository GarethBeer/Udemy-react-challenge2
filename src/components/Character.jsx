import React from "react";

const Character = props => {
	const { char, Click } = props;
	const style = {
		display: "inline-block",
		padding: "16px",
		textAlign: "center",
		margin: "16px",
		border: "1px solid black"
	};
	return (
		<p style={style} onClick={Click}>
			{char}
		</p>
	);
};

export default Character;
