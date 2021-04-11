import { useState } from 'react';

import './App.scss';
import Modal from './components/Modal/Modal';
import NavBar from './components/NavBar/NavBar';
import NoteList from './components/NoteList/NoteList';
// import useLocalStorage from './hooks/useLocalStorage';
import { useSelector } from 'react-redux';
//date-fns library
// import { format } from 'date-fns';

//id generator
// import uuid from 'uuid/v1';

const App = () => {
  //local UI state managed within the component. Don't need to use the global state that redux provides for this.
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //when a note is clicked it sets the state to that specific note
  // const [currentNote, setCurrentNote] = useState(null);

  // const [readOnly, setReadOnly] = useState(true);

  // const [notesContent, setNotesContent] = useLocalStorage('notes', []);

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  //getting dates
  // const formattedDate = format(new Date(), 'EEEE do LLLL yyyy');
  // const time = format(new Date(), `h:mm`);
  // const day = format(new Date(), `EEEE do LLLL, yyyy`);
  // const formattedDate = `${time} on ${day}`;

  // //add new note
  // const saveNote = (title, subtitle, text) => {
  //   if (currentNote) {
  //     //editing
  //     const updatedNotes = notesContent.map((note) => {
  //       //for each note in the array, just return the unchaged note
  //       const editedNote = { ...note };
  //       //unless it's the currentNote, in which case, change it
  //       if (note.id === currentNote.id) {
  //         editedNote.title = title;
  //         editedNote.subtitle = subtitle;
  //         editedNote.text = text;
  //       }
  //       return editedNote;
  //     });
  //     setNotesContent(updatedNotes);
  //   } else {
  //     setNotesContent([
  //       ...notesContent,
  //       { title, subtitle, text, id: uuid(), updated_at: formattedDate }
  //     ]);
  //   }
  // };

  // const createNote = () => {
  //   setCurrentNote(null);
  //   setModalIsOpen(true);
  //   setReadOnly(false);
  // };

  // const removeNote = (id) => {
  //   setNotesContent(notesContent.filter((note) => note.id !== id));
  //   if (modalIsOpen) {
  //     setModalIsOpen(false);
  //   }
  // };

  // const editNote = (id) => {
  //   setCurrentNote(notesContent.find((note) => note.id === id));
  //   setModalIsOpen(true);
  //   setReadOnly(false);
  // };

  // const viewNote = (id) => {
  //   setCurrentNote(notesContent.find((note) => note.id === id));
  //   setModalIsOpen(true);
  //   setReadOnly(true);
  // };

  //callback
  // const findNote = (id) => {
  //   setCurrentNote(notesContent.find((note) => note.id === id));
  //   setModalIsOpen(true);
  // };

  // const editNote = (findeNote) => {
  //   console.log('editing note');
  //   if (notesContent) {
  //     notesContent.map((note) => {
  //       return findNote(note.id);
  //     });
  //   }
  //   setReadOnly(false);
  // };

  // const viewNote = (findeNote) => {
  //   console.log('viewing note');
  //   if (notesContent) {
  //     notesContent.map((note) => {
  //       return findNote(note.id);
  //     });
  //   }
  //   setReadOnly(true);
  // };

  const state = useSelector((state) => state.notesContent);
  // console.log(state.modalIsOpen);
  return (
    <div className='App'>
      <>
        <NavBar /*createNote={createNote}*/ setIsModalOpen={setModalIsOpen} />
        <main className='content'>
          <NoteList
            setModalIsOpen={setModalIsOpen}
            // notesContent={notesContent}
            // removeNote={removeNote}
            // editNote={editNote}
            // viewNote={viewNote}
          />
          {modalIsOpen && (
            <Modal
              modalIsOpen={modalIsOpen}
              setIsModalOpen={setModalIsOpen}
              // saveNote={saveNote}
              // readOnly={readOnly}
              // currentNote={currentNote}
              closeModalHandler={closeModalHandler}
              // notesContent={notesContent}
              // removeNote={removeNote}
              // editNote={editNote}
              // formattedDate={formattedDate}
            />
          )}
          {!state.length ? <div className='empty'>You haven't written any notes yet :(</div> : ''}
        </main>
      </>
    </div>
  );
};

export default App;
