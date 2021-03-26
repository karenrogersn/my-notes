import './Modal.scss';
import NoteForm from '../NoteForm/NoteForm';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ modalIsOpen, setIsModalOpen, addNote }) => {
  return (
    <>
      <Backdrop modalIsOpen={modalIsOpen} setIsModalOpen={setIsModalOpen} />
      <div className='modal'>
        <NoteForm addNote={addNote} setIsModalOpen={setIsModalOpen} />
      </div>
    </>
  );
};

export default Modal;
