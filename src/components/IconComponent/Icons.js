import './Icons.scss';
import rubish from '../../imgs/trash.png';
import pencil from '../../imgs/pencil.png';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actions';

const Icons = ({ id, normalIconClass, modalIsOpen, setModalIsOpen }) => {
  const dispatch = useDispatch();

  const deleteNote = () => {
    dispatch({
      type: actionTypes.REMOVE_NOTE,
      id: id
    });
    if (modalIsOpen) {
      setModalIsOpen(false);
    }
  };

  const editingNote = () => {
    dispatch({
      type: actionTypes.EDIT_NOTE,
      id: id
    });
    setModalIsOpen(true);
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
