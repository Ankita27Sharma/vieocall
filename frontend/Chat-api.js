// Create a new JavaScript file to contain the code for interacting with the Google Chat API.
// For example, you could name the file `chat-api.js`.

// Initialize the Google Chat API client library.
const chat = new Chat({
    projectId: 'challenge-401210',
    credentials: {
      client_email: 'YOUR_SERVICE_ACCOUNT_EMAIL',
      private_key: require('642054013031-mjpv7r1o77nce71t6beq2vfhdejblmf8.apps.googleusercontent.com'),
    },
  });
  
  // Use the client library to make requests to the Google Chat API.
  // For example, to get a list of chat spaces, you would use the following code:
  
  const spaces = await chat.spaces.list();
  
  // Use the responses from the Google Chat API to update the frontend of your website.
  // For example, you could display the list of chat spaces in a dropdown menu.
  
  // To send a message to a chat space, you would use the following code:
  
  chat.spaces.messages.create({
    name: 'YOUR_SPACE_NAME',
    text: 'Hello from my website!',
  });
  
  // You can also listen for messages in a chat space. To do this, you would use the following code:
  
  const stream = chat.spaces.messages.list({
    name: 'YOUR_SPACE_NAME',
  });
  
  stream.on('data', (message) => {
    // Handle the message.
  });
  