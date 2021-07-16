import { createContext } from 'react';

const ModalContext = createContext({
  modalIsOpen: false,
  readOnly: true,
  //including dummmy function for better ide autocopletion
  setModalIsOpen: () => {},
  //also include other functions we've created
  onClosemodal: () => {}
});

export default ModalContext;
