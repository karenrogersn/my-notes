import { useState } from 'react';
import './App.scss';
import Modal from './components/Modal/Modal';
import NavBar from './components/NavBar/NavBar';
import NoteList from './components/NoteList/NoteList';

import uuid from 'uuid/v1';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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

  //send information when opening the modal
  const openModalHandler = () => {
    setModalIsOpen(true);
  };

  //add new note
  const addNote = (title, subtitle, body) => {
    setNotesContent([...notesContent, { title, subtitle, body, id: uuid() }]);
  };

  //remove note
  const removeNote = (id) => {
    console.log('note removed');
    setNotesContent(notesContent.filter((note) => note.id !== id));
  };

  //edit note
  // const editNote = (id) => {
  //   console.log('note id: ', id);
  //   setNotesContent(notesContent.filter((note) => note.id === id));
  // };

  return (
    <div className='App'>
      <>
        <NavBar openModalHandler={openModalHandler} />
        <main className='content'>
          <NoteList notesContent={notesContent} removeNote={removeNote} /*editNote={editNote} */ />
          {modalIsOpen && (
            <Modal modalIsOpen={modalIsOpen} setIsModalOpen={setModalIsOpen} addNote={addNote} />
          )}
        </main>
      </>
    </div>
  );
};

export default App;
//
