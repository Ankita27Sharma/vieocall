import React, { useState } from 'react';
import ChatApi from './Chat-api';

const ChatMessageForm = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    await ChatApi.sendMessage('YOUR_SPACE_NAME', message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatMessageForm;
