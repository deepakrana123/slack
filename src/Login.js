import { Button } from '@material-ui/core';
import React from 'react';
import { auth ,provider} from './firebase'; 
import "./Login.css";
import { useStateValue } from './StateProvider';
import {actionTypes} from "./reducer";

function Login() {
	const[state,dispatch]=useStateValue();
	const signIn=()=>{
		auth.signInWithPopup(provider)
		.then(result=>{
			console.log(result)
			dispatch(
				{
					type:actionTypes.SET_USER,
					user:result.user,
				}
			)
		})
		.catch(error=>{
			alert(error.message)
		});
			
		
	};
	return (
		<div className="login">
		  <div className="login__conatiner">
		  <img src="https://a.slack-edge.com/bv1-8/slack_logo-ebd02d1.svg" alt=""/>
		  <h1>Sign to slack</h1>
		  <p>slack.com</p>
		  <Button onClick={signIn}>Sign in with google</Button>
		  </div>
			
		</div>
	)
}

export default Login
