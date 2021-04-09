import { useState } from 'react';
import './NoteForm.scss';
import marked from 'marked';
import { sampleText } from './sampleText';
import * as actionTypes from '../../store/actions';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const NoteForm = (/*{ saveNote, setIsModalOpen , currentNote  }*/) => {
  //local UI state managed within the component. Don't need to use the global state that redux provides for this

  const notesState = useSelector((state) => state);
  console.log('redux state in noteForm: ', notesState.currentNote);

  const [title, setTitle] = useState(notesState.currentNote ? notesState.currentNote.title : '');

  const [subtitle, setSubtitle] = useState(
    notesState.currentNote ? notesState.currentNote.subtitle : ''
  );
  const [text, setText] = useState(
    notesState.currentNote ? notesState.currentNote.text : sampleText
  );

  const dispatch = useDispatch();

  // const [data, setData] = useState({
  //   title: notesState.currentNote ? currentNote.title : '',
  //   subtitle: notesState.currentNote ? currentNote.subtitle : '',
  //   text: notesState.currentNote ? currentNote.text : ''
  // });

  const submitHandler = (e) => {
    // const closeModal = notesState.modalisOpen;
    e.preventDefault();
    // e.persist();
    dispatch({
      type: actionTypes.SAVE_NOTE,
      title: title,
      subtitle: subtitle,
      text: text
    });
    //after adding a new note, the form is blank again
    setTitle('');
    setSubtitle('');
    setText('');
    // closeModal;
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   saveNote(title, subtitle, text);

  //   //after adding a new note, the form is blank again
  //   setTitle('');
  //   setSubtitle('');
  //   setText('');
  //   setIsModalOpen(false);
  // };
  //render text function
  const renderText = (text) => {
    const __html = marked(text, { sanitize: true });
    return { __html };
  };

  return (
    <div className='form-container'>
      <h2>Add a New Note</h2>
      <form onSubmit={submitHandler}>
        {/* <form onSubmit={addNote}> */}
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
