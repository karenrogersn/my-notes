import NoteCard from '../NoteCard/NoteCard';
import './NoteList.scss';

//assets
import rubish from '../../imgs/trash.png';
import pencil from '../../imgs/pencil.png';

const NoteList = ({ notesContent, removeNote }) => {
  // editNote
  console.log(notesContent);
  return (
    <div className='note-list'>
      {notesContent.map((note) => (
        <NoteCard key={note.id} notesContent={notesContent}>
          <h3>{note.title}</h3>
          <p>{note.subtitle}</p>
          <div className='note-list__icons'>
            <img
              src={pencil}
              alt='edit icon'
              //   /*onClick={(e) => editNote(note.id, e.stopPropagation())}*/
            />
            <img
              src={rubish}
              alt='delete icon'
              onClick={(e) => removeNote(note.id, e.stopPropagation())}
            />
          </div>
        </NoteCard>
      ))}
    </div>
  );
};

export default NoteList;
