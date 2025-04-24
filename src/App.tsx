import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [notificationStatus, setNotificationStatus] = useState('')

  useEffect(() => {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        setNotificationStatus(permission)
        if (permission === 'granted') {
          new Notification("🚀 Welcome to the React PWA!")
        }
      })
    }
  }, [])

  return (
    <div className="App">
      <h1>📱 React + Vite PWA</h1>
      <p>This app works offline and sends basic notifications.</p>
      <p><strong>Notification Permission:</strong> {notificationStatus}</p>
    </div>
  )
}

export default App
