import React from 'react';
import { AiFillCloseSquare } from 'react-icons/ai';

const Header = () => {
  return <section className="header">
    <div className="logo"></div>
    <button>
      <AiFillCloseSquare />
    </button>
  </section>
}

export default Header;