//assets
import rubish from '../../imgs/trash.png';
import pencil from '../../imgs/pencil.png';

//

const Icons = ({ removeNote, editNote, note }) => {
  return (
    <div className='note-list__icons'>
      <img src={pencil} alt='edit icon' onClick={(e) => editNote(note.id, e.stopPropagation())} />
      <img
        src={rubish}
        alt='delete icon'
        onClick={(e) => removeNote(note.id, e.stopPropagation())}
      />
    </div>
  );
};

export default Icons;
