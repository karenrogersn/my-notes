import './Modal.scss';
import NoteForm from '../NoteForm/NoteForm';
import Backdrop from '../Backdrop/Backdrop';
import Note from '../Note/Note';
import CloseButton from '../CloseButton/CloseButton';

import { useSelector } from 'react-redux';

const Modal = ({
  modalIsOpen,
  setIsModalOpen,
  closeModalHandler
  // saveNote,
  // editNote,
  // currentNote,
  // readOnly,
  // notesContent,
  // removeNote,
  // formattedDate
}) => {
  const state = useSelector((state) => state);

  let noteView = state.readOnly ? (
    <Note modalIsOpen={modalIsOpen} setIsModalOpen={setIsModalOpen} note={state.currentNote} />
  ) : (
    <NoteForm closeModalHandler={closeModalHandler} />
  );
  return (
    <>
      <Backdrop modalIsOpen={modalIsOpen} closeModalHandler={closeModalHandler} />
      <div className='modal'>
        <CloseButton closeModalHandler={closeModalHandler} />
        {noteView}
      </div>
    </>
  );
};

export default Modal;
