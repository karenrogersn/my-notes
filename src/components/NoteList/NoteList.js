import Icons from '../IconComponent/Icons';
import NoteCard from '../NoteCard/NoteCard';
import './NoteList.scss';

const NoteList = ({ notesContent, removeNote, editNote, viewNote, openModalHandler }) => {
  // editNote
  // console.log(notesContent, 'notesContent');
  return (
    <div className='note-list'>
      {notesContent.map((note) => (
        <NoteCard key={note.id} note={note} notesContent={notesContent} viewNote={viewNote}>
          <h3>{note.title}</h3>
          <p>{note.subtitle}</p>
          <Icons
            removeNote={removeNote}
            editNote={editNote}
            note={note}
            openModalHandler={openModalHandler}
          />
          {/* <div className='note-list__icons'>
            <img
              src={pencil}
              alt='edit icon' */}
          {/* onClick={(e) => editNote(note.id, e.stopPropagation())}
            />
            <img
              src={rubish}
              alt='delete icon'
              onClick={(e) => removeNote(note.id, e.stopPropagation())}
            />
          </div> */}
        </NoteCard>
      ))}
    </div>
  );
};

export default NoteList;
