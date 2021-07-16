import React, { useContext } from 'react';
import ModalContext from '../../context/modal-context';
import './CloseButton.scss';

const CloseButton = () => {
  const modalCtxt = useContext(ModalContext);
  return (
    <div className='close-btn'>
      <button onClick={modalCtxt.onClosemodal}>&times;</button>
    </div>
  );
};

export default CloseButton;
