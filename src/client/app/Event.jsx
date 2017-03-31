import React from 'react';
// import {render} from 'react-dom';

class Event extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
	  return (

<div className="container-fluid">
  <div className="col-md-3 directory"> col-md-4
  </div>
  <div className="col-md-9">
    <div className="event-title"> Cookout ****** </div>
    <div className="row">
        <div className="col-md-8"> Details</div>
        <div className="col-md-4 event-chat"> Chat </div>
    </div>
  </div>
</div>	  	
	  )
  }
}

export default Event;


    // </div>
      // <div className="row-md-6"> # cookout </div>
      // <div className="row-md-6"> row-md-6 