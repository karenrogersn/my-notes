import React, { useContext } from 'react';
import Icons from '../IconComponent/Icons';
import './Note.scss';
import NoteContext from '../../context/note-context';

const Note = () => {
  const noteCtxt = useContext(NoteContext);

  return (
    <div className='note-container'>
      <h2>{noteCtxt.currentNote.title}</h2>
      <h3>{noteCtxt.currentNote.subtitle}</h3>
      <div className='markup-conainer'>{noteCtxt.currentNote.text}</div>
      <p>Updated at {noteCtxt.currentNote.updated_at}</p>
      <div className='icons-wrapper'>
        <Icons note={noteCtxt.currentNote} />
      </div>
    </div>
  );
};

export default Note;
