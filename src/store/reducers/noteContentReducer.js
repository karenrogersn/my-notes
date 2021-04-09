//importing constants from actions.js with default import

import * as actionTypes from '../actions';

// import useLocalStorage from '../../hooks/useLocalStorage';

//id generator
import { uuid } from 'uuid/v1';

//date-fns library
import { format } from 'date-fns';

const time = format(new Date(), `h:mm`);
const day = format(new Date(), `EEEE do LLLL, yyyy`);
const formattedDate = `${time} on ${day}`;

const initialState = {
  // React Hook "useLocalStorage" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function
  // notesContent: useLocalStorage('notes', [])
  notesContent: [],
  currentNote: null,
  // currentNote: {
  //   title: 'Sample title',
  //   subtitle: 'Sample subtitle',
  //   text: 'Sample text'
  // },
  modalisOpen: false,
  readOnly: true
};

console.log('contents state: ', initialState.notesContent);

//add new note
const saveNote = (title, subtitle, text, state, action) => {
  let updatedNotes;
  if (state.currentNote) {
    //editing
    updatedNotes = state.notesContent.map((note) => {
      //for each note in the array, just return the unchaged note
      const editedNote = { ...note };
      //unless it's the currentNote, in which case, change it
      if (note.id === state.currentNote.id) {
        editedNote.title = title;
        editedNote.subtitle = subtitle;
        editedNote.text = text;
      }
      return editedNote;
    });
  }
  return {
    ...state,
    notesContent: state.currentNote
      ? updatedNotes
      : [
          ...state.notesContent,
          {
            title: title,
            subtitle: subtitle,
            text: text,
            id: uuid(),
            updated_at: formattedDate
          }
        ]
  };
};

const reducer = (state = initialState, action) => {
  const { type } = action;
  //same as doing
  // const type = action.type;
  //const payload = aciton.payload;
  switch (type) {
    case actionTypes.SAVE_NOTE:
      return saveNote(action, action.title, action.subtitle, action.text, state);

    case actionTypes.CREATE_NOTE:
      return {
        ...state,
        modalIsOpen: true,
        readOnly: false
      };

    case actionTypes.REMOVE_NOTE:
      const filteredArray = state.notesContent.filter((note) => note.id !== action.id);
      return {
        ...state,
        notesContent: filteredArray,
        modalIsOpen: false
      };

    case actionTypes.EDIT_NOTE:
      return {
        ...state,
        modalisOpen: true,
        readOnly: false,
        currentNote: state.notesContent.find((note) => note.id === action.id)
      };

    case actionTypes.VIEW_NOTE:
      return {
        ...state,
        modalisOpen: true,
        currentNote: state.notesContent.find((note) => note.id === action.id)
      };

    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        modalisOpen: false
      };

    default:
      return state;
  }
};
export default reducer;
