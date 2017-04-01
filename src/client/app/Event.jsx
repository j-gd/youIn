import React from 'react';
import Chat from './ChatCopy.jsx';
import MyEvents from './MyEvents.jsx';
import Homepage from './Homepage.jsx';
import TopBar from './TopBar.jsx';
import CreateEvent from './CreateEvent.jsx';
// import HomepageCopy from './HomepageCopy.jsx';
import EventOverview from './EventOverview.jsx';

// import {render} from 'react-dom';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      clickedEvent: false
    }
  }

    // <div className="event-title"> Cookout ****** </div>
    // <div className="row">
    //     <div className="col-sm-8"> Details</div>
    //     <div className="col-sm-4 event-chat"> Chat </div>
    // </div>
  render () {
    return (

<div className="container-fluid main">

  <div className="col-sm-3 account">

    <div className='col-sm-12 accountTopBar'>
      <div className='row-sm-3 accountPhoto'>
        <img src={this.props.friends[0].photourl} />
      </div>
      <div className='row-sm-9 accountName'>
        <h2>{this.props.userName}<span className='caret-down'>&#9660;</span></h2>
      </div>
    </div>
    <div className='col-sm-12 accountMyEvents'>
      <h2>My Events</h2>
      <MyEvents events={this.props.ownerEvents}/>

    </div>
    <div className='col-sm-12 accountFriendEvents'>
      <h2>Friend's Events</h2>
      <MyEvents events={this.props.friendEvents}/>
    </div>

  </div>

  <div className="col-sm-9 right9">
    <div className='col-sm-12 topbar'>
      <TopBar owner={this.props.friends[0]}/>
    </div>

    <div className='col-sm-8 mainview'>
      {this.state.clickedEvent ? <CreateEvent/> : <EventOverview/>}



    </div>

    <div className='col-sm-4 right4'>
      <Chat/>
    </div>

  </div>

</div>
	  )
  }
}

export default Event;


    // </div>
      // <div className="row-sm-6"> # cookout </div>
      // <div className="row-sm-6"> row-sm-6