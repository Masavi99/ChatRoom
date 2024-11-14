window.onload = function() {
  const chatBox = document.getElementById('chatbox'); 
  const previousChat = JSON.parse(localStorage.getItem('previousChat')) || [];

  
  previousChat.forEach(message => {
    const messageHTML = `<p><strong>[${message.timestamp}] ${message.userName}:</strong> ${message.text}</p>`;
    chatBox.innerHTML += messageHTML;
  });

  chatBox.scrollTop = chatBox.scrollHeight; 
};


function sendMessage() {
  const chatBox = document.getElementById('chatbox');
  const userName = document.getElementById('userName').value;
  const userMessage = document.getElementById('userMessage').value;
  const timestamp = new Date().toLocaleTimeString();

  if (userName && userMessage) {
    const message = `<p><strong>[${timestamp}] ${userName}:</strong> ${userMessage}</p>`;
    chatBox.innerHTML += message;

    
    const previousChat = JSON.parse(localStorage.getItem('previousChat')) || [];
    previousChat.push({ timestamp, userName, text: userMessage });
    localStorage.setItem('previousChat', JSON.stringify(previousChat));
  // localStorage.setItem(variableKey, variableValue);

    chatBox.scrollTop = chatBox.scrollHeight; 

    
    document.getElementById('userMessage').value = '';

  }




 }

// window.onload = async function() {
//   const chatBox = document.getElementById('chatbox');

//   try {
//     const response = await fetch('http://localhost:3000/chat');
//     const previousChat = await response.json();

//     previousChat.forEach(message => {
//       const messageHTML = `<p><strong>[${message.timestamp}] ${message.userName}:</strong> ${message.text}</p>`;
//       chatBox.innerHTML += messageHTML;
//     });

//     chatBox.scrollTop = chatBox.scrollHeight;
//   } catch (error) {
//     console.error('Error fetching chat history:', error);
//   }
// };

// async function sendMessage() {
//   const chatBox = document.getElementById('chatbox');
//   const userName = document.getElementById('userName').value;
//   const userMessage = document.getElementById('userMessage').value;
//   const timestamp = new Date().toLocaleTimeString();

//   if (userName && userMessage) {
//     const messageHTML = `<p><strong>[${timestamp}] ${userName}:</strong> ${userMessage}</p>`;
//     chatBox.innerHTML += messageHTML;

//     // Scroll to the bottom
//     chatBox.scrollTop = chatBox.scrollHeight;

//     // Clear the message input field
//     document.getElementById('userMessage').value = '';

//     // Post the new message to the server
//     try {
//       await fetch('http://localhost:3000/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ timestamp, userName, text: userMessage })
//       });
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   }
// }
// // Fetch latest messages every 5 seconds
// setInterval(async function() {
//   const chatBox = document.getElementById('chatbox');

//   try {
//     const response = await fetch('http://localhost:3000/chat');
//     const previousChat = await response.json();

//     // Clear and repopulate chatBox with the latest messages
//     chatBox.innerHTML = '';
//     previousChat.forEach(message => {
//       const messageHTML = `<p><strong>[${message.timestamp}] ${message.userName}:</strong> ${message.text}</p>`;
//       chatBox.innerHTML += messageHTML;
//     });

//     chatBox.scrollTop = chatBox.scrollHeight;
//   } catch (error) {
//     console.error('Error fetching chat history:', error);
//   }
// }, 5000); // Fetch updates every 5 seconds


