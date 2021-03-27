import './Note.scss';

const Note = ({ currentNote }) => {
  //   console.log('currentNote in Note', currentNote);
  //   let item = currentNote;
  return (
    <div>
      <h3>{currentNote.title}</h3>
      <h4>{currentNote.subtitle}</h4>
      <p>{currentNote.body}</p>
    </div>
  );
};

export default Note;
