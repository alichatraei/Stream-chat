import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie'
import { _apiKey } from './Constants/_chatAPIKey';
import { ChannelContainer, ChannelListsContainer } from './Components';
import './app.css'
const client = StreamChat.getInstance(_apiKey)

function App() {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListsContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App;
