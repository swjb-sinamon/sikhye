import React from 'react';
interface ModalProps {
    readonly className?: string;
    readonly width: number;
    readonly height: number;
    readonly name: string;
    readonly state: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
