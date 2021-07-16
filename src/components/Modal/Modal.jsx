import React, { useContext } from 'react';
import './Modal.scss';
import NoteForm from '../NoteForm/NoteForm';
import Backdrop from '../Backdrop/Backdrop';
import Note from '../Note/Note';
import CloseButton from '../CloseButton/CloseButton';

import ModalContext from '../../context/modal-context';

const Modal = ({ formattedDate }) => {
  const modalCxt = useContext(ModalContext);

  let noteView = modalCxt.readOnly ? (
    <Note
    // formattedDate={formattedDate}
    />
  ) : (
    <NoteForm />
  );
  return (
    <>
      <Backdrop />
      <div className='modal'>
        <CloseButton />
        {noteView}
      </div>
    </>
  );
};

export default Modal;
