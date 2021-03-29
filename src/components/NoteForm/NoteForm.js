//new note form
import { useState } from 'react';
import './NoteForm.scss';

const NoteForm = ({ saveNote, setIsModalOpen, currentNote }) => {
  const [title, setTitle] = useState(currentNote ? currentNote.title : '');
  const [subtitle, setSubtitle] = useState(currentNote ? currentNote.subtitle : '');
  const [body, setBody] = useState(currentNote ? currentNote.body : '');

  const submitHandler = (e) => {
    console.log('submitting');
    e.preventDefault();
    saveNote(title, subtitle, body);
    //}

    //after adding a new note, the form is blank again
    setTitle('');
    setSubtitle('');
    setBody('');
    setIsModalOpen(false);
  };

  return (
    <div className='note-container'>
      <h2>Add a New Note</h2>
      <form action='' onSubmit={submitHandler}>
        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          value={title}
          name='title'
          id='title'
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor='subtitle'>Subtitle:</label>
        <input
          type='text'
          value={subtitle}
          name='subtitle'
          id='subtitle'
          required
          onChange={(e) => setSubtitle(e.target.value)}
        />
        <label htmlFor='content'>Content of your note:</label>
        <textarea
          name='content'
          id='content'
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <input type='submit' value='Save' />
      </form>
      {/* <p>{title}</p> */}
    </div>
  );
};

export default NoteForm;
