import { useState } from 'react';
import './App.scss';
import Modal from './components/Modal/Modal';
import NavBar from './components/NavBar/NavBar';
import NoteList from './components/NoteList/NoteList';
import useLocalStorage from './hooks/useLocalStorage';
//date-fns library
import { format } from 'date-fns';
import NoteContext from './context/note-context';
import ModalContext from './context/modal-context';
//id generator
import uuid from 'uuid/v1';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //when a note is clicked it sets the state to that specific note
  const [currentNote, setCurrentNote] = useState(null);

  const [readOnly, setReadOnly] = useState(true);

  const [notesContent, setNotesContent] = useLocalStorage('notes', []);

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  //getting dates
  const formattedDate = format(new Date(), 'EEEE do LLLL yyyy');
  // const time = format(new Date(), `h:mm`);
  // const day = format(new Date(), `EEEE do LLLL, yyyy`);
  // const formattedDate = `${time} on ${day}`;

  // //add new note
  const saveNote = (title, subtitle, text) => {
    if (currentNote) {
      //editing
      const updatedNotes = notesContent.map((note) => {
        //for each note in the array, just return the unchaged note
        const editedNote = { ...note };
        //unless it's the currentNote, in which case, change it
        if (note.id === currentNote.id) {
          editedNote.title = title;
          editedNote.subtitle = subtitle;
          editedNote.text = text;
        }
        return editedNote;
      });
      setNotesContent(updatedNotes);
    } else {
      //saving a new note
      setNotesContent([
        ...notesContent,
        { title, subtitle, text, id: uuid(), updated_at: formattedDate }
      ]);
    }
  };

  const createNote = () => {
    setCurrentNote(null);
    setModalIsOpen(true);
    setReadOnly(false);
  };

  const removeNote = (id) => {
    setNotesContent(notesContent.filter((note) => note.id !== id));
    if (modalIsOpen) {
      setModalIsOpen(false);
    }
  };

  const editNote = (id) => {
    setCurrentNote(notesContent.find((note) => note.id === id));
    setModalIsOpen(true);
    setReadOnly(false);
  };

  const viewNote = (id) => {
    setCurrentNote(notesContent.find((note) => note.id === id));
    setModalIsOpen(true);
    setReadOnly(true);
  };

  return (
    <div className='App'>
      <NoteContext.Provider
        value={{
          //key = property from the createContext {} value = the state variable name
          currentNote: currentNote,
          notesContent: notesContent,
          onSaveNote: saveNote,
          onCreatNote: createNote,
          onRemoveNote: removeNote,
          onEditNote: editNote,
          onViewNote: viewNote
        }}
      >
        <ModalContext.Provider
          value={{
            modalIsOpen: modalIsOpen,
            readOnly: readOnly,
            setModalIsOpen: setModalIsOpen,
            onClosemodal: closeModalHandler
          }}
        >
          <NavBar />
          <main className='content'>
            <NoteList />
            {modalIsOpen && <Modal formattedDate={formattedDate} />}
            {!notesContent.length ? (
              <div className='empty'>You haven't written any notes yet :(</div>
            ) : (
              ''
            )}
          </main>
        </ModalContext.Provider>
      </NoteContext.Provider>
    </div>
  );
};

export default App;
