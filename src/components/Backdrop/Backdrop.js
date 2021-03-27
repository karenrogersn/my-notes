import { useEffect } from 'react';
import './Backdrop.scss';

const Backdrop = ({ modalIsOpen, setIsModalOpen, closeModalHandler }) => {
  const escKeyDown = (e) => {
    if (modalIsOpen) {
      if (e.key !== 'Escape') return;
      // setIsModalOpen(!modalIsOpen);
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
  // return modalIsOpen ? (
  //   <div className='backdrop' onClick={() => setIsModalOpen(false)}></div>
  // ) : null;
};

export default Backdrop;
