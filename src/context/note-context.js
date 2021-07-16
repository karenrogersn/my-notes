import { createContext } from 'react';

const NoteContext = createContext({
  currentNote: null,
  notesContent: [],
  //including dummmy function for better ide autocopletion
  setCurrentNote: () => {},
  setNotesContent: () => {},
  //also include other functions we've created
  onSaveNote: () => {},
  onCreatNote: () => {},
  onRemoveNote: () => {},
  onEditNote: () => {},
  onViewNote: () => {}
});

export default NoteContext;
