import React from 'react';
import '../../css/blog/Preview.css';

function Preview({ptitle,pcontent,isPre,setPre}) {

  const handlepreClick = () => {
    setPre(!isPre);
  };

  return (
    <>
      <div className='Header'>
        {ptitle ===''? <label className='notitle'>No BlogTitle</label>:<label className='Title'>{ptitle}</label>}
        <button className='pre-cancelbutton' onClick={handlepreClick}>Cancel</button>
      </div>
      <div  className='precontent'>
        { pcontent ===''? <label> Please write some content...</label>:<div  dangerouslySetInnerHTML={{ __html : pcontent}} />}
      </div>
    </>
  )
}

export default Preview
