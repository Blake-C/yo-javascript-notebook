import React from 'react';

class App extends React.Component {
	render() {
		return (
			<div className="row columns">
				<Button>React <Heart /></Button>
			</div>
		);
	}
}

class Button extends React.Component {
	constructor() {
		super();

		this.handlerOnClick = this.handlerOnClick.bind(this);
	}

	handlerOnClick() {
		alert('clicked!!');
	}

	render() {
		return (
			<button onClick={this.handlerOnClick} className="button">
				{this.props.children}

				{console.log(this)}
			</button>
		);
	}
}

const Heart = () => <span>New Text</span>;

/**
 * Define prop types
 */
Button.propTypes = {
	children: React.PropTypes.array,
	handlerOnClick: React.PropTypes.func
};


export default App;
