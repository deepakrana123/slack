import React, { useState } from 'react'
import axios from './axios'
import { useStateValue } from './StateProvider';
function ChatInput({channelName,channelId}) {
	const[input,setInput]= useState("");
	const[{user}]=useStateValue();
  const sendMessage=(e)=>{
	  e.preventDefault();
	  if(channelId){
	axios.post(`/new/meassge?id=${channelId}`,{
		message:input,
		timestamp:Date.now(),
		user:user.displayName,
		userImages:user.photoURL

	})
} setInput("");
  };
	return (
		<div className="chatInput">
		<from>
		<input value={input} onChange={(e)=>setInput(e.target.value)} placeholder={`Message#${channelName}`}/>
		<button type="submit" onClick={sendMessage}>
		SEND</button></from>
			
		</div>
	);
}

export default ChatInput
