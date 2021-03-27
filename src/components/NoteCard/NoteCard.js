import './NoteCard.scss';

const NoteCard = ({ children, setClickedNote, note }) => {
  return (
    <article className='note-preview' onClick={(e) => setClickedNote(note.id, e.stopPropagation())}>
      {children}
    </article>
  );
};

export default NoteCard;
