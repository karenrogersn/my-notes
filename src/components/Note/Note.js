import Icons from '../IconComponent/Icons';
import './Note.scss';

const Note = ({ currentNote, formattedDate, removeNote, editNote, note }) => {
  //   console.log('currentNote in Note', currentNote);
  //   let item = currentNote;
  return (
    <div className='note-container'>
      <h2>{currentNote.title}</h2>
      <h3>{currentNote.subtitle}</h3>
      <div className='markup-conainer'>{currentNote.text}</div>
      <p>Updated at {formattedDate}</p>
      <div className='icons-wrapper'>
        <Icons removeNote={removeNote} editNote={editNote} note={note} />
      </div>
    </div>
  );
};

export default Note;
