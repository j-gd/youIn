import React from 'react';
import MyEvents from './MyEvents.jsx';


class Account extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      photo: false
    }
  }
  render(){
    return(
    <div>
      <div className='col-sm-12 accountTopBar'>
        <div className='row-sm-3 accountPhoto'>
          {/* NEEDS LINKING TO RENDER <img src={this.props.friends[0].photourl} />*/}
        </div>
        <div className='row-sm-9 accountName'>
          <h2>{this.props.userName}<span className='caret-down'>&#9660;</span></h2>
        </div>
      </div>
      <div className='col-sm-12 accountMyEvents'>
        <h2>My Events</h2>
        <MyEvents myEvents={this.props.ownerEvents}/>

      </div>
      <div className='col-sm-12 accountFriendEvents'>
        <h2>Friend's Events</h2>
        <MyEvents friendEvents={this.props.friendEvents}/>
      </div>
    </div>
    )
  }
}

export default Account;