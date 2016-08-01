import React from 'react';
import Router from 'react-router';
import Repos from './Github/Repos'
import Notes from './Notes/Notes'
import UserProfile from './Github/UserProfile'
import Rebase from 're-base';

const base = Rebase.createClass('https://pruebas-con-notas.firebaseio.com/')

export class Profile extends React.Component {
	constructor(props) {
    	super(props);
		this.state = {
			notes:[],
			bio:{
				name : 'Jorge Blanco'
			},
			repos:['a', 'b', 'c']
		};
  	}
	componentDidMount() {
		this.ref = base.bindToState(this.props.params.username, {
			context: this,
			asArray: true,
			state: 'notes'
		});
	}
	componentWillUnmount() {
		base.removingBinding(this.ref)
	}
	handleAddNote(newNote) {
		base.post(this.props.params.username, {
			data: this.state.notes.concat([newNote]),
			then(){
				console.log('Yeeeeha!')
			}
			
		})
	}
	render() {
		return (
			<div className="row">
				<div className="col-md-4">
					<UserProfile username={this.props.params.username} bio={this.state.bio} />
				</div>
				<div className="col-md-4">
					<Repos username={this.props.params.username} repos={this.state.repos}/>
				</div>
				<div className="col-md-4">
					<Notes 
					username={this.props.params.username}
					notes={this.state.notes}
					addNote={(newNote) => this.handleAddNote(newNote)} />
				</div>
			</div>
		)
	}
}

export default Profile;