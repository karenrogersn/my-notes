//new note form
import { useState } from 'react';
import './NoteForm.scss';

const NoteForm = ({ addNote, setIsModalOpen, editNote, notesContent, currentNote }) => {
  // console.log(currentNote);
  let item = currentNote[0];
  const [title, setTitle] = useState(item.title);
  const [subtitle, setSubtitle] = useState(item.subtitle);
  const [body, setBody] = useState(item.body);

  // const [preFilledData, setPrefilledData] = useState(null);

  // console.log(notesContent);

  const submitHandler = (e) => {
    e.preventDefault();
    // if (notesContent.length) {
    //   editNote(
    //     notesContent.map((note) => {
    //       return note.id;
    //     })
    //   );
    // } else {
    addNote(title, subtitle, body);
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
    </div>
  );
};

export default NoteForm;
