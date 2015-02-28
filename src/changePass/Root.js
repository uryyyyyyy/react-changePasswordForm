'use strict';
import React  from 'react';
import AsyncUtil  from '../utils/functions/AsyncUtil';
import Logger  from '../utils/functions/Logger';
import AccountCheckForm  from './AccountCheckForm';
import NewPasswordCheckForm  from './NewPasswordCheckForm';

export default React.createClass({
	propTypes: {},
	getInitialState() {
		return {
			isValidAccount: false,
			isValidPassword: false
		};
	},
	changeIsValidAccount(value) {
		this.setState({isValidAccount: value});
	},
	changeIsValidNewPassword(value) {
		this.setState({isValidPassword: value});
	},

	post() {
		Logger.debug('post');
		const postObj = {
			accountId: this.refs.accountForm.state.accountId,
			currentPass: this.refs.accountForm.state.currentPass,
			newPass: this.refs.newPasswordForm.state.newPass,
		};
		AsyncUtil.postAjaxAsync('webAPI/changePass', postObj);
	},
	createButton() {
		if(this.state.isValidAccount && this.state.isValidPassword){
			return(
				<button onClick={this.post} children='Change password' />
			);
		}else{
			return(
				<button children='Change password' disabled />
			);
		}
	},
	render() {
		const vDOM = this.createButton();
		return (
			<div>
				<h2 children='Check Current Account' />
				<AccountCheckForm ref="accountForm"
				changeValid={this.changeIsValidAccount}
				isValid={this.state.isValidAccount} />

				<h2 children='Check new Password' />
				<NewPasswordCheckForm ref="newPasswordForm"
				changeValid={this.changeIsValidNewPassword}
				isValid={this.state.isValidPassword} />

				{vDOM}
			</div>
		);
	}
});
