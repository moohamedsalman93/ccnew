import React from 'react'
import  EditorToolbar, { modules, formats } from "./EditToolbar";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../../css/blog/form/Richtext.css';


function Richtext({content,setContent}) {

  function handleContentChange(value) {
    setContent(value);
  }

  return (
    <div className='richtext-container'>
       <EditorToolbar toolbarId={'t2'} className="textedit"/>
        <ReactQuill
              modules={modules('t2')}
              formats={formats}
              className='richtext'
              value={content}
              onChange={handleContentChange}
            />
    </div>
  )
}

export default Richtext;
