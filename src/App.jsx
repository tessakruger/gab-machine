import React, {Component} from 'react';

import ChatBar from './components/ChatBar.jsx';
import MessageList from './components/MessageList.jsx';

class App extends Component {
  render() {
    return (
    	<div>
	        <nav className="navbar">
	          <a href="/" className="navbar-brand">Chatty</a>
	        </nav>
	        <MessageList />
            <ChatBar />
        </div>
    );
  }
}
export default App;