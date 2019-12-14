import React from "react";

const Character = props => {
	const { char } = props;
	const style = {
		display: "inline-block",
		padding: "16px",
		textAlign: "center",
		margin: "16px",
		border: "1px solid black"
	};
	return <p style={style}>{char}</p>;
};

export default Character;
