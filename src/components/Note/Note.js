import Icons from '../IconComponent/Icons';
import './Note.scss';

const Note = ({ note, modalIsOpen, setIsModalOpen }) => {
  return (
    <div className='note-container'>
      <h2>{note.title}</h2>
      <h3>{note.subtitle}</h3>
      <div className='markup-conainer'>{note.text}</div>
      <p>Updated at {note.updated_at}</p>
      {/* <p>Updated at {formatDistance(note.updated_at, new Date(), { addSuffix: true })}</p> */}
      <div className='icons-wrapper'>
        <Icons note={note} modalIsOpen={modalIsOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </div>
  );
};

export default Note;
