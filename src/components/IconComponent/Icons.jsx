import React, { useContext } from 'react';
import './Icons.scss';
import rubish from '../../imgs/trash.png';
import pencil from '../../imgs/pencil.png';
import NoteContext from '../../context/note-context';

const Icons = ({ note, normalIconClass }) => {
  const noteCtxt = useContext(NoteContext);

  return (
    <div className={normalIconClass ? 'icon--normal' : 'icon--large'}>
      <img
        src={pencil}
        alt='edit icon'
        onClick={(e) => noteCtxt.onEditNote(note.id, e.stopPropagation())}
      />
      <img
        src={rubish}
        alt='delete icon'
        onClick={(e) => noteCtxt.onRemoveNote(note.id, e.stopPropagation())}
      />
    </div>
  );
};

export default Icons;
