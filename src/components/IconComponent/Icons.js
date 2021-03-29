//assets
import './Icons.scss';
import rubish from '../../imgs/trash.png';
import pencil from '../../imgs/pencil.png';
// import { cn } from 'classnames';
// import { useState } from 'react';

const Icons = ({ removeNote, editNote, note, normalIconClass }) => {
  return (
    <div className={normalIconClass ? 'normalIconClass' : 'largeIconClass'}>
      <img src={pencil} alt='edit icon' onClick={(e) => editNote(note.id, e.stopPropagation())} />
      <img
        src={rubish}
        alt='delete icon'
        onClick={(e) => removeNote(note.id, e.stopPropagation())}
      />
    </div>
  );
};

export default Icons;
