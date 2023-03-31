import React from 'react';
import homevector from '../../assets/homevector.png';
import '../../css/blog/noblog.css';

function NoBlog() {
  return (
   
        <div className='initial-img'>
            <img src={homevector} alt="no data" className='initial-img-prop'/>
            <div className='init-text'>No blogs here! Click to post new Blogs</div>
        </div>
        
    
    
  )
}

export default NoBlog
