// Initialize Google Sign-In
function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    document.getElementById('user-info').innerText = `Logged in as: ${profile.getName()}`;
}

// Handle sending messages (dummy implementation)
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        const messageElement = document.createElement('div');
        messageElement.textContent = messageText;
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
    }
});
