import Icons from '../IconComponent/Icons';
import NoteCard from '../NoteCard/NoteCard';
import './NoteList.scss';

const NoteList = ({ notesContent, removeNote, editNote, setClickedNote, openModalHandler }) => {
  // editNote
  // console.log(notesContent, 'notesContent');
  return (
    <div className='note-list'>
      {notesContent.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          notesContent={notesContent}
          setClickedNote={setClickedNote}
        >
          <h3>{note.title}</h3>
          <p>{note.subtitle}</p>
          <Icons
            removeNote={removeNote}
            editNote={editNote}
            note={note}
            setClickedNote={setClickedNote}
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
