import React from 'react';
import EventListItem from './EventListItem.jsx';

class MyEvents extends React.Component {
  constructor(props){
    super(props);
    this.state={}
  }


render(){
  // const = myEventItems = this.props.events
  // console.log(this.props.events);
  return(
    <div>
    {this.props.events.map( event =>
      <EventListItem key={event.date} event={event}/>
    )}
    </div>
  // <h1>   h2</h1>
    )
  }

}

export default MyEvents;