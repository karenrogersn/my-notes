import './NavBar.scss';

const NavBar = ({ createNote }) => {
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
