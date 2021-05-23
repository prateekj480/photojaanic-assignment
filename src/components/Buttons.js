import React from 'react';
import { FaUndo } from 'react-icons/fa';
import { FaRetweet } from 'react-icons/fa';
import { FiImage } from 'react-icons/fi';
import { BiText } from 'react-icons/bi';
import { BiCamera } from 'react-icons/bi';
import { FaChessBoard } from 'react-icons/fa';
import { IoGrid } from 'react-icons/io5';

const Buttons = () => {
  return <section>
    <div className="buttons">
      <div className="actions">
        <div>
          <div className="button">
            <button>
              <FaUndo />
            </button>
          </div>
          <span>Undo</span>
        </div>
        <div>
          <div className="button">
            <button>
              <FaRetweet />
            </button>
          </div>
          <span>Redo</span>
        </div>
        <div>
          <div className="button">
            <button>
              <FiImage />
            </button>
          </div>
          <span>Image</span>
        </div>
        <div>
          <div className="button">
            <button>
              <BiText />
            </button>
          </div>
          <span>Text</span>
        </div>
      </div>
      <div className="cta">
        <button>Save</button>
        <button>Add to cart</button>
      </div>
    </div>
    <div className="empty-canvas">
    </div>
    <div className="view-buttons">
      <button className="clicked"><BiCamera /></button>
      <button><FaChessBoard /></button>
      <button><IoGrid /></button>
    </div>
  </section>
}

export default Buttons;