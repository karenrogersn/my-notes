// import { useState } from 'react';

import './Modal.scss';
import NoteForm from '../NoteForm/NoteForm';
import Backdrop from '../Backdrop/Backdrop';
import Note from '../Note/Note';

const Modal = ({
  modalIsOpen,
  setIsModalOpen,
  saveNote,
  editNote,
  currentNote,
  closeModalHandler,
  readOnly,
  formattedDate,
  removeNote
}) => {
  // console.log('currentNote in modal', currentNote);
  return (
    <>
      <Backdrop
        modalIsOpen={modalIsOpen}
        setIsModalOpen={setIsModalOpen}
        closeModalHandler={closeModalHandler}
      />
      <div className='modal'>
        {readOnly ? (
          <Note
            currentNote={currentNote}
            formattedDate={formattedDate}
            removeNote={removeNote}
            editNote={editNote}
            note={currentNote}
          />
        ) : (
          <NoteForm saveNote={saveNote} setIsModalOpen={setIsModalOpen} currentNote={currentNote} />
        )}
      </div>
    </>
  );
};

export default Modal;
