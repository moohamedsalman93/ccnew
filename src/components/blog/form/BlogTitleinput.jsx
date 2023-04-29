import React, { useState,useEffect } from 'react';
import '../../../css/blog/form/BlogTitleinput.css'

function BlogTitleBox({ title, handleChange }) {

  const [value,svalue] = useState();

  useEffect(() => {
    if (title) {
      svalue(title);
    } else {
      svalue(null);
    }
  }, [title]);
  


 
  return (
    <div className='h-[60px] w-[200px] bg-[]'>
      <input
        className="titleinput"
        type='text'
        name='BlogTitle'
        placeholder='Blog Title'
        value={value}
        onChange={event => handleChange(event.target.value)}
        maxLength={100}
      />
    </div>
  )
}

export default BlogTitleBox;
