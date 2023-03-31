import React from 'react';
import {Link} from "react-router-dom";
import '../css/blog/Button.css'


function Button({children}) {
  return (
    <Link to="/Blog/newblog"className='buttoncon'>
        <button className='contbutton'>
          {children}
        </button>
    </Link>
  )
}

export default Button;
