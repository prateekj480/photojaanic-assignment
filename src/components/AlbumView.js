import React, { useState } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { MdEdit } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import Plane from '../assets/plane.jpg';
import Jelly from '../assets/jellyfish.jpg';
import Koala from '../assets/koala.jpg';

const AlbumView = () => {
  const [albumName, setAlbumName] = useState('Album_5_sep_');
  const [prevAlbumName, setPrevAlbumName] = useState(albumName);
  const [editable, setEditable] = useState(false);

  const handleInputChange = (e) => {
    if (editable) {
      setAlbumName(e.target.value)
    }
  }

  const editAlbum = (e) => {
    e.preventDefault();
    if (albumName.trim() === "") {
      setEditable(false);
      setAlbumName(prevAlbumName);
    } else {
      setEditable(false);
      setPrevAlbumName(albumName);
    }
  }

  const cancelEdit = () => {
    setEditable(false);
    setAlbumName(prevAlbumName);
  }

  return <section className="edit-section">
    <h3>Photos</h3>
    <div className="edit-container">
      <button>
        <IoChevronBack />Back
      </button>
      <div className="form-control">
        <form onSubmit={editAlbum}>
          <input type="text" value={albumName} onChange={handleInputChange} readOnly={!editable} />
        </form>
        <button className={!editable ? null : 'hide'} onClick={() => setEditable(true)}>
          <MdEdit />
        </button>
        <button className={editable ? null : 'hide'} onClick={editAlbum}>
          <AiOutlineCheck />
        </button>
        <button className={editable ? null : 'hide'} onClick={cancelEdit}>
          <IoClose />
        </button>
      </div>
    </div>
    <div className="images">
      <div className="add-photo">
        <button><BsFillPlusSquareFill /></button>
        <span>Add photo</span>
      </div>
      <div className="image">
        <input type="checkbox" />
        <img src={Plane} alt="album" />
      </div>
      <div className="image">
        <input type="checkbox" />
        <img src={Jelly} alt="album" />
      </div>
      <div className="image">
        <input type="checkbox" />
        <img src={Koala} alt="album" />
      </div>
    </div>
  </section>
}

export default AlbumView;