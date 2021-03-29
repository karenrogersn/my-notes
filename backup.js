import { useState } from 'react';
import './App.scss';
import Modal from './components/Modal/Modal';
import NavBar from './components/NavBar/NavBar';
import NoteList from './components/NoteList/NoteList';

//date-fns library
import { format } from 'date-fns';

//id generator
import uuid from 'uuid/v1';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //when a note is clicked it sets the state to that specific note
  const [currentNote, setCurrentNote] = useState(null);

  const [readOnly, setReadOnly] = useState(true);

  //dummy data testing
  const [notesContent, setNotesContent] = useState([
    {
      title: 'Name Of The Wind',
      subtitle: 'Patrick Rothfuss',
      body:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quod. Iure amet consequuntur consequatur hic ullam illum deserunt dicta dolorem enim quaerat, odit deleniti aliquid doloribus veniam voluptatibus eligendi ab.',
      id: 1
    },
    {
      title: 'The Final Empire',
      subtitle: 'Brandon Sanderson',
      body:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, maiores. Sequi iusto id autem alias, expedita at dolore explicabo nostrum doloremque error molestias qui corporis possimus iste ipsa illo voluptatibus..',
      id: 2
    },
    {
      title: 'The Final Empire2',
      subtitle: 'Brandon Sanderson',
      body:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tempore soluta pariatur nostrum sit quod accusantium, error ducimus sunt ipsam alias blanditiis provident doloribus assumenda? Harum assumenda aliquam ipsa placeat.',
      id: 3
    }
  ]);

  let now = new Date();
  let formattedDate = format(now, `EEEE, do LLLL, yyyy h:mm`);

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  //send information when opening the modal
  const openModalHandler = () => {
    setModalIsOpen(true);
    console.log('clicked');
  };

  //add new note
  const saveNote = (title, subtitle, body) => {
    if (currentNote) {
      //editing
      const updatedNotes = notesContent.map((note) => {
        //for each note in the array, just return the unchaged note
        const editedNote = { ...note };
        //unless it's the currentNote, in which case, change it
        if (note.id === currentNote.id) {
          editedNote.title = title;
          editedNote.subtitle = subtitle;
          editedNote.body = body;
        }
        return editedNote;
      });
      setNotesContent(updatedNotes);
    } else {
      setNotesContent([
        ...notesContent,
        { title, subtitle, body, id: uuid(), updated_at: formattedDate }
      ]);
    }
  };

  //remove note
  const removeNote = (id) => {
    console.log('note removed', id);
    setNotesContent(notesContent.filter((note) => note.id !== id));
  };

  //edit/view note
  const editNote = (id) => {
    // console.log('editing', id);
    setCurrentNote(notesContent.find((note) => note.id === id));
    setModalIsOpen(true);
    setReadOnly(false);
  };

  const viewNote = (id) => {
    console.log('viewing', id);
    setCurrentNote(notesContent.find((note) => note.id === id));
    setModalIsOpen(true);
    setReadOnly(true);
  };

  const createNote = () => {
    setCurrentNote(null);
    setModalIsOpen(true);
    setReadOnly(false);
  };

  // console.log(notesContent);

  return (
    <div className='App'>
      <>
        <NavBar createNote={createNote} />
        <main className='content'>
          <NoteList
            notesContent={notesContent}
            removeNote={removeNote}
            editNote={editNote}
            viewNote={viewNote}
            openModalHandler={openModalHandler}
          />
          {modalIsOpen && (
            <Modal
              modalIsOpen={modalIsOpen}
              setIsModalOpen={setModalIsOpen}
              saveNote={saveNote}
              readOnly={readOnly}
              currentNote={currentNote}
              closeModalHandler={closeModalHandler}
              formattedDate={formattedDate}
            />
          )}
        </main>
      </>
    </div>
  );
};

export default App;
//
