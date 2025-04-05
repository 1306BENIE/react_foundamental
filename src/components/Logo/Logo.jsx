import React from 'react';
import { Link } from 'react-router';

const Logo = ()=>{
  return (
    <>
      <div className="logo">
        <Link to={"/"}>
          <p>Anidassor</p>
          </Link>
      </div>
    </>
  )
}

export default Logo;