import React from 'react';
import OwnerEventList from './OwnerEventList.jsx';
import FriendEventList from './FriendEventList.jsx';
import CreateEventButton from './CreateEventButton.jsx';
import LogoutButton from './LogoutButton.jsx';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Chat from './ChatCopy.jsx';
import TopBar from './TopBar.jsx';
import CreateEvent from './CreateEvent.jsx';
import EventOverview from './EventOverview.jsx';
import Account from './Account.jsx';
// import {render} from 'react-dom';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
      clickedEvent: false,
      createEvent: false,
    };
  }

  handleClickedEvent() {
    console.log('clicked!');
    this.setState({clickedEvent: !this.state.clickedEvent});
  }  

  pollEvents() {
    this.props.getEvents(this.props.history, function(result) {

      if (result.ownerEvents.length !== this.state.ownerEvents.length) {
        this.setState({
          ownerEvents: result.ownerEvents
        });
      }
      if (result.friendEvents.length !== this.state.friendEvents.length) {
        this.setState({
          friendEvents: result.friendEvents
        });
      }
    });
  }

  componentDidMount() {
    this.setState({
      intervalId: setInterval(this.pollEvents.bind(this), 1000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    this.setState({
      intervalId: null
    });
  }

  render() {
    return (
    // { -------PAGE WRAPPER------ }
    <div className="container-fluid main">

      {/* -------LEFT HAND COLUMN------- */}
      <div className="col-sm-3 account">
        <Account 
          username={this.props.userName}
          friends = {this.props.friends} 
          myEvents={this.props.ownerEvents} 
          friendEvents={this.props.friendEvents} 
          handleClickedEvent={this.handleClickedEvent.bind(this)}
        />
      </div>

      {/* -------RIGHT HAND COLUMN------- */}
      <div className="col-sm-9 right9">

         {/* -------TOPBAR------- */}
        <div className='col-sm-12 topbar'>
          <TopBar owner={this.props.friends[0]}/>
        </div>

         {/* -------MAIN------- */}
        <div className='col-sm-8 mainview'>
          {this.state.clickedEvent ? <CreateEvent/> : <EventOverview/>}
        </div>

         {/* -------CHAT------- */}
        <div className='col-sm-4 right4'>
          <Chat/>
        </div>

      </div>
    </div>
    )
  }
}


export default Homepage;
    // return (
    //   <div>
    //     <div className="container">
    //       <div className="page-header">
    //        <h2 id='userName'>Welcome <span id="headerName">{this.props.userName}</span></h2>
    //         <LogoutButton />
    //       </div>
    //       <CreateEventButton
    //       history={this.props.history}
    //       friends={this.props.friends}
    //       getEvents={this.props.getEvents}/>
    //       <br /><br />
    //       <div className='container events'>
    //         <br></br><br></br>
    //         <h2 id="my-events-title" className='header-inner'> My Events</h2>
    //         <OwnerEventList
    //         ownerEventsArr={this.props.ownerEvents}
    //         accessToken={this.props.accessToken}
    //         getEvents={this.props.getEvents}
    //         history={this.props.history}/>
    //       </div>
    //         <br /><br />
    //       <div className='container events'>
    //         <h2 id="friend-events-title"className='header-inner'> Friend Events</h2>
    //         <FriendEventList accessToken={this.props.accessToken}
    //         friendEventsArr={this.props.friendEvents}
    //         getEvents={this.props.getEvents}/>
    //       </div>
    //     </div>
    //     <Link to='/slack' > Link to new design </Link>
    //   </div>
    // )