import './Modal.scss';
import NoteForm from '../NoteForm/NoteForm';
import Backdrop from '../Backdrop/Backdrop';
import Note from '../Note/Note';
import CloseButton from '../CloseButton/CloseButton';

import { useSelector } from 'react-redux';

const Modal = ({
  modalIsOpen,
  setIsModalOpen,
  saveNote,
  editNote,
  currentNote,
  closeModalHandler,
  readOnly,
  notesContent,
  removeNote,
  formattedDate
}) => {
  const state = useSelector((state) => state);

  let noteView = state.readOnly ? (
    <Note
      modalIsOpen={modalIsOpen}
      setIsModalOpen={setIsModalOpen}
      formattedDate={formattedDate}
      removeNote={removeNote}
      editNote={editNote}
      notesContent={notesContent}
      note={currentNote}
    />
  ) : (
    <NoteForm saveNote={saveNote} setIsModalOpen={setIsModalOpen} currentNote={currentNote} />
  );
  return (
    <>
      <Backdrop
      // modalIsOpen={modalIsOpen}
      // setIsModalOpen={setIsModalOpen}
      // closeModalHandler={closeModalHandler}
      />
      <div className='modal'>
        {/* <CloseButton closeModalHandler={closeModalHandler} /> */}
        <CloseButton />
        {noteView}
        {/* {readOnly ? (
          <Note
            modalIsOpen={modalIsOpen}
            setIsModalOpen={setIsModalOpen}
            formattedDate={formattedDate}
            removeNote={removeNote}
            editNote={editNote}
            notesContent={notesContent}
            note={currentNote}
          />
        ) : (
          <NoteForm saveNote={saveNote} setIsModalOpen={setIsModalOpen} currentNote={currentNote} />
        )} */}
      </div>
    </>
  );
};

export default Modal;
