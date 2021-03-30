import Icons from '../IconComponent/Icons';
import './Note.scss';

//date-fns library
// import { formatDistance } from 'date-fns';

const Note = ({ formattedDate, removeNote, editNote, note }) => {
  return (
    <div className='note-container'>
      <h2>{note.title}</h2>
      <h3>{note.subtitle}</h3>
      <div className='markup-conainer'>{note.text}</div>
      <p>Updated at {formattedDate}</p>
      {/* <p>Updated at {formatDistance(note.updated_at, new Date(), { addSuffix: true })}</p> */}
      <div className='icons-wrapper'>
        <Icons removeNote={removeNote} editNote={editNote} note={note} />
      </div>
    </div>
  );
};

export default Note;
