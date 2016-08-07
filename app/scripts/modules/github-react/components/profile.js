import React from 'react';
import Repos from './github/repos.js';
import UserProfile from './github/userprofile.js';

class Profile extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			notes: [],
			bio: {},
			repos: []
		};
	}

	render(){
		console.log(this.props);

		return (
			<div className="row">
				<div className="medium-4 columns">
					<div className="callout">
						<UserProfile username={this.props.params.username} bio={this.state.bio} />
					</div>
				</div>
				<div className="medium-4 columns">
					<div className="callout">
						<Repos username={this.props.params.username} repos={this.state.repos}/>
					</div>
				</div>
				<div className="medium-4 columns">
					<div className="callout">
						Notes Component
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
