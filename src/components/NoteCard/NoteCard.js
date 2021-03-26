import './NoteCard.scss';

const NoteCard = ({ children }) => {
  return (
    <article className='note-preview' onClick={() => console.log('clicked')}>
      {children}
    </article>
  );
};

export default NoteCard;
