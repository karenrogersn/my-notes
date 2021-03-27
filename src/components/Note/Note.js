import './Note.scss';

const Note = ({ currentNote }) => {
  //   console.log('currentNote in Note', currentNote);
  let item = currentNote[0];
  return (
    <div>
      <h3>{item.title}</h3>
      <h4>{item.subtitle}</h4>
      <p>{item.body}</p>
    </div>
  );
};

export default Note;
