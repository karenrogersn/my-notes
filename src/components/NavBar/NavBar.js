import './NavBar.scss';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actions';

const NavBar = ({ setIsModalOpen /*createNote */ }) => {
  const dispatch = useDispatch();

  const createNote = () => {
    console.log('creating note');
    dispatch({
      type: actionTypes.CREATE_NOTE
    });
    setIsModalOpen(true);
  };
  return (
    <nav className='navbar'>
      <h1>My Notes app</h1>
      <div className='create'>
        <button onClick={createNote}>New Note</button>
      </div>
    </nav>
  );
};

export default NavBar;
