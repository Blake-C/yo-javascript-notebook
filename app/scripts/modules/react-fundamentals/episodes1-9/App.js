import React from 'react';
import Widget from './Widget';
import Slider from './Slider';

/**
 * Statefull, class component
 */
class App extends React.Component {
	/**
	 * State is a collection of values,
	 * meant to be managed by the component itself
	 */
	constructor () {
		super(); // gives context for this within component

		// Add state to App object
		this.state = {
			txt: 'this is the state txt',
			red: 128,
			green: 128,
			blue: 128
		};

		this.update = this.update.bind(this);
	}

	/**
	 * Custom method to manage state
	 */
	update(event) {
		this.setState({
			txt: event.target.value,
			red: this.refs.red.refs.input.value,
			green: this.refs.green.refs.input.value,
			blue: this.refs.blue.refs.input.value
		});
	}

	render() {
		/**
		 * Props passed in as static values
		 */
		const txt = this.props.txt;
		const cat = this.props.cat;
		const txtState = this.state.txt;

		const inputStyles = {
			width: '200px',
			height: '200px',
			border: '3px solid',
			transition: 'all 0.3s',
			backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`
		};

		return (
			<div className="row columns">
				<div className="callout">
					<input type="text"
						placeholder="Change State Txt"
						onChange={this.update} />

					<h1>Hello World!!!</h1>
					<p>Props txt: {txt}</p>
					<p>Props cat: {cat}</p>
					<p>State, txt: {txtState}</p>
				</div>

				<div className="callout">
					<Widget txt={this.state.txt} update={this.update} />
				</div>

				<div className="callout">
					<Slider ref="red" update={this.update} />
					{this.state.red}
					<br/>

					<Slider ref="green" update={this.update} />
					{this.state.green}
					<br/>

					<Slider ref="blue" update={this.update} />
					{this.state.blue}
					<br/>

					<div style={inputStyles}></div>
				</div>
			</div>
		);
	}
}

/**
 * Define prop types
 */
App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
};

/**
 * Default Props
 */
App.defaultProps = {
	txt: 'this is Default',
	cat: 10
};

/**
 * Stateless, function component
 */
// const App = () => {
// 	return(
// 		<div className="row columns">
// 			<div className="callout">
// 				<h1>Hello World!!!</h1>
// 			</div>
// 		</div>
// 	);
// }

export default App;
