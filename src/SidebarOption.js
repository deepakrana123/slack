import React from 'react';
import "./SidebarOption.css"
import {useHistory} from "react-router-dom";
import axios from './axios';
/*import db from "./firebase"; */
function SidebarOption({Icon ,title,id,addchannelOption}) {
	const history=useHistory();

	const selectchannel=()=>{
		if(id){
		history.push('/room/${id')
		}
		else{
			history.push(title);
		}
	}

	const addchannel=()=>{
		const channelName=prompt("enter your channel name");

		axios.post('/new/channel',{
			channelName:channelName
		})
		
		
	}
	return (
		<div className="sidebarOption" onClick={addchannelOption?addchannel:selectchannel}>
		{Icon && <Icon className="sidebarOption_icon"/>}
		{Icon ?(
			<h3 className="siderbarOption_channel">{title}</h3>):(<h3>
				<span className="sidebarOption_hash"></span>#{title}</h3>)
		}
		</div>
	)
}

export default SidebarOption;
