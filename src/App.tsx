import { useState } from "react";
import { notification } from '@tauri-apps/api'

function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function sendNotification() {
    notification.sendNotification({
      title,
      body,
      icon: '../src-tauri/icons/notification.png',
    });
  }
  return (
    <div className="container">
       <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={sendNotification}>Send Notification</button>
    </div>
  );
}

export default App;
