import './NoteCard.scss';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actions';

const NoteCard = ({ children, id, setModalIsOpen }) => {
  const dispatch = useDispatch();

  const viewingNote = () => {
    dispatch({
      type: actionTypes.VIEW_NOTE,
      id: id,
      openModal: setModalIsOpen(true)
    });
  };

  return (
    <article
      className='note-preview'
      // onClick={(e) => viewNote(note.id, e.stopPropagation())}
      onClick={(e) => viewingNote(e.stopPropagation())}
    >
      {children}
    </article>
  );
};

export default NoteCard;
