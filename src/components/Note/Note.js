import './Note.scss';

const Note = ({ currentNote, formattedDate }) => {
  //   console.log('currentNote in Note', currentNote);
  //   let item = currentNote;
  return (
    <div>
      <h3>{currentNote.title}</h3>
      <h4>{currentNote.subtitle}</h4>
      <p>{currentNote.body}</p>
      <p>Updated at: {formattedDate}</p>
    </div>
  );
};

export default Note;
