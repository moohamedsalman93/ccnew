import React from 'react'
import  EditorToolbar, { modules, formats } from "./EditToolbar";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../../css/blog/form/Richtext.css';


function Richtext({content,handleChangerich}) {
  return (
    <div className='richtext-container'>
       <EditorToolbar toolbarId={'t2'} className="textedit"/>
        <ReactQuill
              modules={modules('t2')}
              formats={formats}
              className='richtext'
              value={content}
              onChange={handleChangerich}
            />
    </div>
  )
}

export default Richtext;
