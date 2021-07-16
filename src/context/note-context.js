import { createContext } from 'react';

const NoteContext = createContext({
  currentNote: null,
  notesContent: [],
  //including dummmy functions for better ide autocopletion
  onSaveNote: () => {},
  onCreatNote: () => {},
  onRemoveNote: () => {},
  onEditNote: () => {},
  onViewNote: () => {}
});

export default NoteContext;
