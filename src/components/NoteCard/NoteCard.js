import './NoteCard.scss';

const NoteCard = ({ children, viewNote, note }) => {
  return (
    <article className='note-preview' onClick={(e) => viewNote(note.id)}>
      {children}
    </article>
  );
};

export default NoteCard;
