import Icons from '../IconComponent/Icons';
import NoteCard from '../NoteCard/NoteCard';
import './NoteList.scss';

const NoteList = ({ notesContent, removeNote, editNote, viewNote }) => {
  return (
    <div className='note-list'>
      {notesContent.map((note) => (
        <NoteCard key={note.id} note={note} notesContent={notesContent} viewNote={viewNote}>
          <h3>{note.title}</h3>
          <p>{note.subtitle}</p>
          <Icons normalIconClass removeNote={removeNote} editNote={editNote} note={note} />
        </NoteCard>
      ))}
    </div>
  );
};

export default NoteList;
