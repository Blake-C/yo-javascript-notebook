import React from 'react';

const Widget = (props) => {
	return (
		<div>
			<input type="text"
				placeholder="Change State Txt"
				onChange={props.update} />

			<p>State, txt: {props.txt}</p>
		</div>
	);
};

Widget.propTypes = {
	update: React.PropTypes.func,
	txt: React.PropTypes.string
};

export default Widget;
