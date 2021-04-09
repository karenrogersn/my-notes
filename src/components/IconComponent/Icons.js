import './Icons.scss';
import rubish from '../../imgs/trash.png';
import pencil from '../../imgs/pencil.png';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actions';

const Icons = ({ removeNote, editNote, note, normalIconClass, modalIsOpen, setModalIsOpen }) => {
  const dispatch = useDispatch();

  const deleteNote = (e) => {
    dispatch({
      type: actionTypes.REMOVE_NOTE,
      id: note.id
    });
    // if (modalIsOpen) {
    //   setModalIsOpen(false);
    // }
  };

  const editingNote = (e) => {
    dispatch({
      type: actionTypes.EDIT_NOTE,
      id: note.id
    });
  };

  return (
    <div className={normalIconClass ? 'icon--normal' : 'icon--large'}>
      <img
        src={pencil}
        alt='edit icon'
        // onClick={(e) => editNote(note.id, e.stopPropagation())}
        onClick={(e) => editingNote(e.stopPropagation())}
      />
      <img
        src={rubish}
        alt='delete icon'
        // onClick={(e) => removeNote(note.id, e.stopPropagation())}
        onClick={(e) => deleteNote(e.stopPropagation())}
      />
    </div>
  );
};

export default Icons;
