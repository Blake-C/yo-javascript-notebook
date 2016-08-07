import React from 'react';

const Main = ({children}) => {
	return (
		<div>
			<div  className="callout">
				<div className="row">
					<div className="medium-7 columns">
						Search
					</div>
					<div className="medium-4 columns">
						Button
					</div>
				</div>
			</div>

			<div className="container">
				{children}
			</div>
		</div>
	);
};

Main.propTypes = {
	children: React.PropTypes.object
};

export default Main;
