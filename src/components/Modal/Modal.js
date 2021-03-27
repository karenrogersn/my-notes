import { useState } from 'react';

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
  readOnly
}) => {
  console.log('currentNote in modal', currentNote);
  return (
    <>
      <Backdrop
        modalIsOpen={modalIsOpen}
        setIsModalOpen={setIsModalOpen}
        closeModalHandler={closeModalHandler}
      />
      <div className='modal'>
        {readOnly ? (
          <Note currentNote={currentNote} />
        ) : (
          <NoteForm
            saveNote={saveNote}
            setIsModalOpen={setIsModalOpen}
            // notesContent={notesContent}
            currentNote={currentNote}
          />
        )}
      </div>
    </>
  );
};

export default Modal;
