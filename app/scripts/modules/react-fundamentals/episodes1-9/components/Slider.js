import React from 'react';

class Slider extends React.Component {
	render() {
		return (
			<input ref="input" type="range"
				min="0"
				max="255"
				onChange={this.props.update} />
		);
	}
}

Slider.propTypes = {
	update: React.PropTypes.func
};

export default Slider;
