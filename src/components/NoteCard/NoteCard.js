import './NoteCard.scss';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actions';

const NoteCard = ({ children, viewNote, note }) => {
  const dispatch = useDispatch();

  const viewingNote = (e) => {
    dispatch({
      type: actionTypes.VIEW_NOTE,
      id: note.id
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
