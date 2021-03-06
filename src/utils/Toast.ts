import { store } from 'react-notifications-component';

type MessageType = 'success' | 'danger' | 'info' | 'default' | 'warning';

const showToast = (message: string, type: MessageType, title?: string): void => {
  store.addNotification({
    title: title || '',
    message,
    type,
    insert: 'top',
    container: 'top-right',
    dismiss: {
      duration: 2000,
      onScreen: false
    }
  });
};

export default showToast;
