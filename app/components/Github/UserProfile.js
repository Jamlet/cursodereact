import React from 'react';

export class UserProfile extends React.Component {
	render() {
		return (
			<div>
				<p> USER PROFILE! </p>
				<p> Username: {this.props.username}</p>
				<p> Bio : {this.props.bio.name} </p>
			</div>
		);
	}
}

UserProfile.propTypes={
	username: React.PropTypes.string.isRequired,
	bio: React.PropTypes.object.isRequired
}

export default UserProfile;