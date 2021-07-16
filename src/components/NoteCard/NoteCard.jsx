import React, { useContext } from 'react';
import './NoteCard.scss';

import NoteContext from '../../context/note-context';

const NoteCard = ({ children, note }) => {
  const noteCtx = useContext(NoteContext);
  return (
    <article
      className='note-preview'
      onClick={(e) => noteCtx.onViewNote(note.id, e.stopPropagation())}
    >
      {children}
    </article>
  );
};

export default NoteCard;
