import React, {Component} from 'react';

import Message from './Message.jsx';

class ChatBar extends Component {
  render() {
  	console.log("Rendering <ChatBar/>");
    return (
		<footer className="chatbar">
			<input
				className="chatbar-username"
				placeholder="Your Name (Optional)"
				defaultValue={this.props.currentUser.name} />
			<input className="chatbar-message" placeholder="Type a message and hit ENTER" />
		</footer>
    );
  }
}
export default ChatBar;