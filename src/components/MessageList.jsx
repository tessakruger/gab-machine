import React, {Component} from 'react';

import Message from './Message.jsx';

class MessageList extends Component {
	render() {
		console.log("Rendering <MessageList/>");
		const messages = this.props.messages;
		const eachMessage = messages.map((msg, index) => {
	return (
		<Message
			key={ index }
			username={ msg.username }
			content={ msg.content }
		/>
		)
	});

	return (
		<main className="messages">
		  { eachMessage }
		  <div className="message system">
		  </div>
		</main>
	)}
}

export default MessageList;