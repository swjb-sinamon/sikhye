import { store } from 'react-notifications-component';
const showToast = (message, type) => {
    store.addNotification({
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
