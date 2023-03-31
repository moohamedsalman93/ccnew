import React from 'react'
import '../../../css/blog/form/BlogTitleinput.css'

function BlogTitleBox({value,handleChange}) {
  return (
    <div>
        <input
              className="titleinput"
              type='text'
              //required='true'
              name='BlogTitle'
              placeholder='Blog Title'
              value={value}
              onChange={handleChange}
            />
    </div>
  )
}

export default BlogTitleBox;