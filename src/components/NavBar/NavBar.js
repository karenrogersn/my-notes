import './NavBar.scss';

const NavBar = ({ openModalHandler }) => {
  return (
    <nav className='navbar'>
      <h1>My Notes app</h1>
      <div className='create'>
        <button className='create--btn' onClick={openModalHandler}>
          New Note
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
