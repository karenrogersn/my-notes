import './CloseButton.scss';
import { useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actions';

const CloseButton = ({ closeModalHandler }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const closeModal = () => {
    console.log('closing modal');
    //if (state.modalisOpen) {
    dispatch({
      type: actionTypes.CLOSE_MODAL
    });
    //}
    console.log(state.modalisOpen);
  };

  return (
    <div className='close-btn'>
      <button onClick={closeModal}>&times;</button>
    </div>
  );
};

export default CloseButton;
