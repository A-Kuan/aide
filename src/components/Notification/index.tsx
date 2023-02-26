import { useEffect } from "react";
// import { invoke } from '@tauri-apps/api/tauri/notification';
import { notification } from '@tauri-apps/api'


const Notification = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const now = new Date();
      const nextHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1, 0, 0);
      const timeToNextHour = nextHour - now;
      setTimeout(sendNotification, timeToNextHour);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);
  const sendNotification = () => {
    notification.sendNotification({
      title: "通知",
      body: "132",
      icon: '../src-tauri/icons/notification.png',
    });

    const now = new Date();
    const nextHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1, 0, 0);
    const timeToNextHour = nextHour - now;
    setTimeout(sendNotification, timeToNextHour);
  }
  return <></>
}

export default Notification;
