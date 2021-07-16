import { useState, useContext } from 'react';
import './NoteForm.scss';
import marked from 'marked';
import { sampleText } from './sampleText';
import NoteContext from '../../context/note-context';
import ModalContext from '../../context/modal-context';

const NoteForm = () => {
  const noteCxt = useContext(NoteContext);
  const modalCxt = useContext(ModalContext);

  //local UI state managed within the component. Don't need to use the global state that redux provides for this

  const [title, setTitle] = useState(noteCxt.currentNote ? noteCxt.currentNote.title : '');

  const [subtitle, setSubtitle] = useState(noteCxt.currentNote ? noteCxt.currentNote.subtitle : '');
  const [text, setText] = useState(noteCxt.currentNote ? noteCxt.currentNote.text : sampleText);

  const submitHandler = (e) => {
    e.preventDefault();
    noteCxt.onSaveNote(title, subtitle, text);
    //after adding a new note, the form is blank again
    setTitle('');
    setSubtitle('');
    setText('');
    modalCxt.setModalIsOpen(false);
  };

  //render text function
  const renderText = (text) => {
    const __html = marked(text, { sanitize: true });
    return { __html };
  };

  return (
    <div className='form-container'>
      <h2>Add a New Note</h2>
      <form onSubmit={submitHandler}>
        <div className='inputs-wrapper'>
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
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6 row__div'>
              <textarea
                //write text here
                onChange={(e) => setText(e.target.value)}
                value={text}
                className='form-control'
                rows='25'
              />
            </div>
            <div className='col-sm-6 row__div'>
              {/* render text here */}
              <div dangerouslySetInnerHTML={renderText(text)} />
            </div>
          </div>
        </div>
        <input type='submit' value='Save' />
      </form>
    </div>
  );
};

export default NoteForm;
