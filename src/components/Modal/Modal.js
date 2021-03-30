import './Modal.scss';
import NoteForm from '../NoteForm/NoteForm';
import Backdrop from '../Backdrop/Backdrop';
import Note from '../Note/Note';
import CloseButton from '../CloseButton/CloseButton';

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
  return (
    <>
      <Backdrop
        modalIsOpen={modalIsOpen}
        setIsModalOpen={setIsModalOpen}
        closeModalHandler={closeModalHandler}
      />
      <div className='modal'>
        <CloseButton closeModalHandler={closeModalHandler} />
        {readOnly ? (
          <Note
            formattedDate={formattedDate}
            removeNote={removeNote}
            editNote={editNote}
            notesContent={notesContent}
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
