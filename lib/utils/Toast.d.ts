declare type MessageType = 'success' | 'danger' | 'info' | 'default' | 'warning';
declare const showToast: (message: string, type: MessageType) => void;
export default showToast;
