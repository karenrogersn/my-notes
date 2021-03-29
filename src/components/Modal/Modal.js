// import { useState } from 'react';

import './Modal.scss';
import NoteForm from '../NoteForm/NoteForm';
import Backdrop from '../Backdrop/Backdrop';
import Note from '../Note/Note';

//date-fns library
import { format, formatDistance, distanceInWordsToNow } from 'date-fns';

const Modal = ({
  modalIsOpen,
  setIsModalOpen,
  saveNote,
  editNote,
  currentNote,
  closeModalHandler,
  readOnly,
  //formattedDate,
  removeNote
}) => {
  let now = new Date();
  let time = format(now, `h:mm`);
  let day = format(now, `EEEE do LLLL, yyyy`);
  let formattedDate = `${time} on ${day}`;

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
          <NoteForm
            saveNote={saveNote}
            setIsModalOpen={setIsModalOpen}
            currentNote={currentNote}
            formattedDate={formattedDate}
          />
        )}
      </div>
    </>
  );
};

export default Modal;
