import { useState } from 'react';
import './App.scss';
import Modal from './components/Modal/Modal';
import NavBar from './components/NavBar/NavBar';
import NoteList from './components/NoteList/NoteList';

import uuid from 'uuid/v1';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //when a note is clicked it sets the state to that specific note
  const [currentNote, setCurrentNote] = useState(null);

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

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  //send information when opening the modal
  const openModalHandler = () => {
    setModalIsOpen(true);
    console.log('clicked');
  };

  const openModalEmpty = () => {
    console.log('open modal empty');
    setModalIsOpen(true);
    if (!currentNote) {
      return;
    }
  };

  //add new note
  const addNote = (title, subtitle, body) => {
    setNotesContent([...notesContent, { title, subtitle, body, id: uuid() }]);
  };

  //remove note
  const removeNote = (id) => {
    console.log('note removed', id);
    setNotesContent(notesContent.filter((note) => note.id !== id));
  };

  //edit/view note
  const editNote = (id) => {
    console.log('note id: ', id);
    // setNotesContent(notesContent.filter((note) => note.id === id));
    setModalIsOpen(true);
  };

  const setClickedNote = (id) => {
    console.log(id);
    console.log(currentNote);
    setCurrentNote(notesContent.filter((note) => note.id === id));
    setModalIsOpen(true);
  };

  return (
    <div className='App'>
      <>
        <NavBar openModalHandler={openModalHandler} openModalEmpty={openModalEmpty} />
        <main className='content'>
          <NoteList
            notesContent={notesContent}
            removeNote={removeNote}
            editNote={editNote}
            setClickedNote={setClickedNote}
            openModalHandler={openModalHandler}
          />
          {modalIsOpen && (
            <Modal
              modalIsOpen={modalIsOpen}
              addNote={addNote}
              editNote={editNote}
              notesContent={notesContent}
              currentNote={currentNote}
              closeModalHandler={closeModalHandler}
            />
          )}
        </main>
      </>
    </div>
  );
};

export default App;
//
