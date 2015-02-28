'use strict';
import React  from 'react';
import PasswordForm  from '../utils/myComponents/PasswordForm';
import Logger  from '../utils/functions/Logger';
import AlertMessage  from '../utils/myComponents/AlertMessage';

export default React.createClass({
	propTypes: {
		changeValid: React.PropTypes.func,
		isValid: React.PropTypes.bool
	},
	getInitialState() {
		return {
			newPass: "",
			newPass2: ""
		};
	},

	changeNewPass(value) {
		this.setState({newPass: value});
		this.check(value, this.state.newPass2);
	},
	changeNewPass2(value) {
		this.setState({newPass2: value});
		this.check(this.state.newPass, value);
	},
	check(pass, pass2) {
		if((pass.length > 0) &&
 			(pass === pass2)){
			this.props.changeValid(true);
		}else{
			this.props.changeValid(false);
		}
	},
	render() {
		const vDOM = this.props.isValid ?
			<div>ok</div> :
			<AlertMessage value="not same password"/>;
		return (
			<dl>
				<dt children="New Password " />
				<dd>
					<PasswordForm onChange={this.changeNewPass}
					value={this.state.newPass}/>
				</dd>
				<dt children="New Password 2" />
				<dd>
					<PasswordForm onChange={this.changeNewPass2}
					value={this.state.newPass2}/>
				</dd>
				<dt></dt>
				<dd>{vDOM}</dd>
			</dl>
		);
	}
});
