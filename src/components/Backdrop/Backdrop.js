import { useEffect, useContext, useCallback } from 'react';
import './Backdrop.scss';
import ModalContext from '../../context/modal-context';

const Backdrop = () => {
  const modalCtxt = useContext(ModalContext);

  const modalClose = () => {
    if (modalCtxt.modalIsOpen) {
      modalCtxt.onClosemodal();
    }
  };

  //closing the modal when Esc key is pressed
  const escKeyDown = useCallback(
    (e) => {
      if (modalCtxt.modalIsOpen) {
        if (e.key !== 'Escape') return;
        modalCtxt.onClosemodal();
      }
    },
    [modalCtxt]
  );

  //run escKeyDown everytime the modalCtxt.modalIsOpen state changes
  useEffect(() => {
    // console.log('run');
    if (modalCtxt.modalIsOpen) {
      document.addEventListener('keydown', escKeyDown, true);
    } else {
      document.removeEventListener('keydown', escKeyDown, true);
    }
  }, [modalCtxt.modalIsOpen, escKeyDown]);

  return modalCtxt.modalIsOpen ? <div className='backdrop' onClick={modalClose}></div> : null;
};

export default Backdrop;
