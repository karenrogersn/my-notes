import { useEffect } from 'react';
import './Backdrop.scss';

const Backdrop = ({ modalIsOpen, setIsModalOpen, closeModalHandler }) => {
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

  return modalIsOpen ? <div className='backdrop' onClick={closeModalHandler}></div> : null;
};

export default Backdrop;
