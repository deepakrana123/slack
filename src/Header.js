import React from "react"
import "./Header.css"
import {Avatar} from "@material-ui/core";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { useStateValue } from "./StateProvider";
function Header(){
	const[{user}]=useStateValue();
	return(
		<div className="header">
		<div className="header_left">
		<Avatar className="header_avatar"
		 alt={user?.displayName}
		 src={user?.image}/>
	         <AccessTimeIcon/>
		</div>
		<div className="header_search">
		          <SearchIcon/>
		<input placeholder="Search Here"></input></div>
		<div className="header_right">
		       <HelpOutlineIcon/>
		</div>
		
		</div>

	)
}


export default Header;