import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie'
import { _apiKey } from './Constants/_chatAPIKey';
import { ChannelContainer, ChannelListsContainer } from './Components';
import AuthenticationPage from './Views/AuthenticationPage/AuthenticationPage';
import 'stream-chat-react/dist/css/index.css';
import './app.css'
const cookies = new Cookies()

const auth = cookies.get('token')
const client = StreamChat.getInstance(_apiKey)

if (auth) {
  client.connectUser(
    {
      id: cookies.get('userId'),
      name: cookies.get('userName'),
      hashedPassword: cookies.get('hashedPassword'),
      fullName: cookies.get('fullName'),
      phoneNumber: cookies.get('phoneNumber'),
      image: cookies.get('avatar')
    }, auth
  )
}
function App() {
  const [createType, setCreateType] = useState('')
  const [isCreating, setIsCreating] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  if (!auth)
    return <AuthenticationPage />
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListsContainer
          setCreateType={setCreateType}
          setIsCreating={setIsCreating}
          isCreating={isCreating}
          setIsEditing={setIsEditing}
        />
        <ChannelContainer
          setCreateType={setCreateType}
          setIsCreating={setIsCreating}
          isCreating={isCreating}
          setIsEditing={setIsEditing}
          isEditing={isEditing}
          createType={createType} />
      </Chat>
    </div>
  );
}

export default App;
