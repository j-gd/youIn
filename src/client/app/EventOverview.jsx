import React from 'react';

class EventOverview extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return(
      <div className='EventOverviewWrapper'>
        <div className='eventDetails'>
          <h4>March 30th, 2017</h4>
          <h4>Hack Reactor</h4>
          <h4>994 Market St, SF, CA 94102</h4>
          <h4>SuggestedDonation: $5</h4>
          <p>Update</p>
        </div>

        <div className='whosIn'>
          <ul>
            <li>MIKE</li>
            <li>ED</li>
            <li>BETH</li>
          </ul>
          <h4>Add Friends</h4>
        </div>

        <div className='reminders'>
          <h4>Send rsvp reminders to group now</h4>
          <h4>Send event reminders to group now</h4>
        </div>
      </div>
    )
  }
}

export default EventOverview;