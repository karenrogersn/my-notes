import { useState } from 'react';

import './Modal.scss';
import NoteForm from '../NoteForm/NoteForm';
import Backdrop from '../Backdrop/Backdrop';
import Note from '../Note/Note';

const Modal = ({
  modalIsOpen,
  setIsModalOpen,
  addNote,
  editNote,
  notesContent,
  currentNote,
  closeModalHandler
}) => {
  // const [editMode, setEditMode] = useState(currentNote);
  const [readOnly, setReadOnly] = useState(true);

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
            addNote={addNote}
            setIsModalOpen={setIsModalOpen}
            editNote={editNote}
            notesContent={notesContent}
            currentNote={currentNote}
          />
        )}
      </div>
    </>
  );
};

export default Modal;
