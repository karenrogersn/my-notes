import './CloseButton.scss';
// import { useDispatch } from 'react-redux';
// import * as actionTypes from '../../store/actions';

const CloseButton = ({ closeModalHandler }) => {
  return (
    <div className='close-btn'>
      <button onClick={closeModalHandler}>&times;</button>
    </div>
  );
};

export default CloseButton;
