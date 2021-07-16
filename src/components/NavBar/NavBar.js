import React, { useContext } from 'react';
import './NavBar.scss';
import NoteContext from '../../context/note-context';


const NavBar = () => {

const noteCxt = useContext(NoteContext);

  return (
    <nav className='navbar'>
      <h1>My Notes app</h1>
      <div className='create'>
        <button onClick={noteCxt.onCreatNote}>New Note</button>
      </div>
    </nav>
  );
};

export default NavBar;
