import React from 'react';
// import {render} from 'react-dom';

class Event extends React.Component {
  constructor(props) {
    super(props);
  }

    // <div className="event-title"> Cookout ****** </div>
    // <div className="row">
    //     <div className="col-sm-8"> Details</div>
    //     <div className="col-sm-4 event-chat"> Chat </div>
    // </div>
  render () {
    return (

<div className="container-fluid main">

  <div className="col-sm-3 directory"> col-sm-3

  </div>

  <div className="col-sm-9 right9">
    <div className='col-sm-12 topbar'>
      TOPBAR
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