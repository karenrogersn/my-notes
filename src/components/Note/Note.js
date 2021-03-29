import Icons from '../IconComponent/Icons';
import './Note.scss';

const Note = ({ currentNote, formattedDate, removeNote, editNote, note }) => {
  //   console.log('currentNote in Note', currentNote);
  //   let item = currentNote;
  return (
    <div>
      <h3>{currentNote.title}</h3>
      <h4>{currentNote.subtitle}</h4>
      <p>{currentNote.body}</p>
      <p>Updated at: {formattedDate}</p>

      <div style={{ border: '1px solid blue' }}>
        <Icons removeNote={removeNote} editNote={editNote} note={note} />
      </div>
    </div>
  );
};

export default Note;
