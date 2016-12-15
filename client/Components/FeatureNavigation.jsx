//Child component within the Event Planning component
//Allows user to navigate between the event planning details
import React from 'react';
import { Link } from 'react-router'

var FeatureNavigation = (props) => (
  <div className="mySidenav">
  <ul id="slide-out" className="side-nav" onClick={() => props.closeNav()}>
    <li><Link to="/wtb">What To Bring</Link></li>
    {/*<li><a href='#' className="wtbBtn" id="firstBtn" value="whatToBringBtn" onClick={(e) => props.changeDisplay(e)}>What To Bring</a></li>*/}
    <li><a href='#' className="reminderBtn" value="reminderBtn" onClick={(e) => props.changeDisplay(e)}>Reminders</a></li>
    <li><a href='#' className="photosBtn" value="photosBtn" onClick={(e) => props.changeDisplay(e)}>Photos</a></li>
    <li><a href='#' className="chatBtn" value="chatBtn" onClick={(e) => props.changeDisplay(e)}>Chatroom (IP)</a></li>
    <li><a>Close Navigation</a></li>    
  </ul>
    <a href="#" data-activates="slide-out" className="button-collapse"><i onClick={() => props.openNav()} className="material-icons">Navigation</i></a>
  </div>
);

export default FeatureNavigation;

window.FeatureNavigation = FeatureNavigation;