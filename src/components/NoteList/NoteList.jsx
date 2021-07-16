import React, { useContext } from 'react';
import Icons from '../IconComponent/Icons';
import NoteCard from '../NoteCard/NoteCard';
import './NoteList.scss';
import NoteContext from '../../context/note-context';

const NoteList = () => {
  const noteCtxt = useContext(NoteContext);

  return (
    <div className='note-list'>
      {noteCtxt.notesContent.map((note) => {
        return (
          <NoteCard key={note.id} note={note}>
            <h3>{note.title}</h3>
            <p>{note.subtitle}</p>
            <Icons normalIconClass note={note} />
          </NoteCard>
        );
      })}
    </div>
  );
};

export default NoteList;
