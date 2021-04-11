import { useEffect } from 'react';
import './Backdrop.scss';

const Backdrop = ({ modalIsOpen, closeModalHandler }) => {
  const modalClose = () => {
    if (modalIsOpen) {
      closeModalHandler();
    }
  };

  //closing the modal when Esc key is pressed
  const escKeyDown = (e) => {
    if (modalIsOpen) {
      if (e.key !== 'Escape') return;
      closeModalHandler();
    }
  };

  useEffect(() => {
    if (modalIsOpen) {
      document.addEventListener('keydown', escKeyDown, true);
    } else {
      document.removeEventListener('keydown', escKeyDown, true);
    }
  });

  return modalIsOpen ? <div className='backdrop' onClick={modalClose}></div> : null;
};

export default Backdrop;
