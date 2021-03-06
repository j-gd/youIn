import React from 'react';
var socket = require('socket.io-client');

class Chat extends React.Component{
  constructor(props){
    super(props);
    this.state={
      message: '',
      messages: []
    }
    //bind functions
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.createSocketConnection = this.createSocketConnection.bind(this);
  }

  componentDidMount(){
    this.createSocketConnection()
  }

  createSocketConnection(){
    // var socket = io();
    // var context = this;
    // //listening for 'chat message', setting state

    // socket.on('messages', (msg) => {
    //   console.log('messages', msg);
    //   let messages = context.state.messages;
    //   messages = msg;
    //   console.log('messages', messages);
    //   context.setState({
    //     messages: messages
    //   })
    // });

  }

  handleFormSubmit(event){
    event.preventDefault();
    event.stopPropagation();

    let context = this;
    let author = this.props.owner;
    console.log('author', author);
    console.log('inside form event');
    // var socket = io();
    // var message = {
    //   event_id: 3,
    //   event_owner: 234234234,
    //   message: this.state.message,
    //   photourl: author.photourl,
    //   author_id: author.user_id,
    //   author_email: author.email,
    // }

    // //route and message to send to server
    // socket.emit('chat', message);

    this.setState({
      message: ''
    })
  }

  handleTextChange(event){
    console.log('inside handleTextChange')
    this.setState({
      message: event.target.value
    })
  }

  render(){

    return(
    <div className='chatContainer'>
      <form onSubmit={this.handleFormSubmit} className='chatFlexForm'>

      <div className='chatFlexTop'>
        <div className='flexRowTop'>
          <h2 className='flexRowItemLeft'> {this.props.event.title} </h2>
        </div>
      </div>

      <div className='chatFlexMiddle'>
        <ul className='flexRowMiddle'>
          {this.state.messages.map(message =>
            <li className='displayChatNames' key={message.message}>{message.message}</li>
          )}
        </ul>
      </div>

      <div className='chatFlexBottom'>
        <div className='flexRowBottom'>
          <input type='text' className='chatFlex4-5' onChange={this.handleTextChange} value={this.state.message} placeholder='chat with friends' />
          <input type='submit' className='chatFlex1-5' />
        </div>
      </div>

      </form>
    </div>
    )
  }
}


export default Chat;
