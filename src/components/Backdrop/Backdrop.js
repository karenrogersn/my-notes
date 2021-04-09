import { useEffect } from 'react';
import './Backdrop.scss';
import { useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actions';

const Backdrop = ({ modalIsOpen, setIsModalOpen, closeModalHandler }) => {
  const dispatch = useDispatch();
  let state = useSelector((state) => state);
  console.log('modal state: ', state);

  const modalClose = () => {
    console.log('modal close on click backdrop', state.modalisOpen);
    //if (state.modalisOpen) {
    dispatch({ type: actionTypes.CLOSE_MODAL });
    //}
  };

  //closing the modal when Esc key is pressed
  const escKeyDown = (e) => {
    if (state.modalisOpen) {
      if (e.key !== 'Escape') return;
      // closeModalHandler();
      dispatch({ type: actionTypes.CLOSE_MODAL });
    }
  };

  useEffect(() => {
    if (state.modalisOpen) {
      document.addEventListener('keydown', escKeyDown, true);
    } else {
      document.removeEventListener('keydown', escKeyDown, true);
    }
  });

  return state.modalisOpen ? <div className='backdrop' onClick={modalClose}></div> : null;
};

export default Backdrop;
