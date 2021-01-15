import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ReactModal from 'react-modal';
import { SCREEN_SIZE } from '../../styles';
const StyledModal = styled(ReactModal) `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  border: none;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(169, 169, 169, 0.2);

  padding: 1.8rem;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_MOBILE}) {
    width: 95%;
    height: 80%;
  }
`;
const CancelButton = styled.button `
  position: absolute;
  top: 20px;
  right: 20px;

  border: none;
  background: transparent;

  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--color-button-hover);
  }
`;
const ModalContent = styled.div `
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
`;
const Modal = ({ className, width, height, name, state, children }) => {
    const [isOpen, setOpen] = state;
    return (React.createElement(StyledModal, { className: className, isOpen: isOpen, onRequestClose: () => setOpen(false), contentLabel: name, width: width, height: height, style: {
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.6)'
            }
        } },
        React.createElement(CancelButton, { onClick: () => setOpen(false) },
            React.createElement(FontAwesomeIcon, { icon: faTimes })),
        React.createElement(ModalContent, null,
            React.createElement("div", null, children))));
};
export default Modal;
