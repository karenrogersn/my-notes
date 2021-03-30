import './CloseButton.scss';

const CloseButton = ({ closeModalHandler }) => {
  return (
    <div className='close-btn'>
      <button onClick={closeModalHandler}>&times;</button>
    </div>
  );
};

export default CloseButton;
