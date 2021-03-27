import './NavBar.scss';

const NavBar = ({ openModalEmpty }) => {
  return (
    <nav className='navbar'>
      <h1>My Notes app</h1>
      <div className='create'>
        <button className='create--btn' onClick={openModalEmpty}>
          New Note
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
