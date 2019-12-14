import React, { Component } from "react";
import Validation from "./components/Validation";
import Character from "./components/Character";

import "./App.css";

class App extends Component {
	state = {
		inputField: ""
	};
	handleOnChange = event => {
		console.log(event.target.value);
		const inputText = event.target.value;
		this.setState({
			inputField: inputText
		});
	};
	render() {
		return (
			<div className="App">
				<h1>Type something below:</h1>
				<input type="text" onChange={this.handleOnChange} />
				<p>{this.state.inputField}</p>
				<Validation textLength={this.state.inputField.length} />
				{this.state.inputField.split("").map((char, index) => (
					<Character char={char} key={index} />
				))}
			</div>
		);
	}
}

export default App;
