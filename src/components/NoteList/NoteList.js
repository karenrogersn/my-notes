import Icons from '../IconComponent/Icons';
import NoteCard from '../NoteCard/NoteCard';
import './NoteList.scss';

import { useSelector } from 'react-redux';

const NoteList = ({ setModalIsOpen }) => {
  const allNotesState = useSelector((state) => state.notesContent);
  console.log('redux state: ', allNotesState);

  return (
    <div className='note-list'>
      {allNotesState.map((note) => (
        <NoteCard key={note.id} id={note.id} setModalIsOpen={setModalIsOpen}>
          <h3>{note.title}</h3>
          <p>{note.subtitle}</p>
          <Icons normalIconClass id={note.id} />
        </NoteCard>
      ))}
    </div>
  );
};

export default NoteList;
// {/* <NoteCard key={note.id} note={note} notesContent={notesContent} viewNote={viewNote}>
//   <h3>{note.title}</h3>
//   <p>{note.subtitle}</p>
//   <Icons normalIconClass removeNote={removeNote} editNote={editNote} note={note} />
// </NoteCard> */}
