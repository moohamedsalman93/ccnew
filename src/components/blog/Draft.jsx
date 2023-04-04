import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import downarrow from '../../assets/downarrow.png';
import uparrow from '../../assets/uparrow.png';
import eye from '../../assets/eye.png';
import '../../css/blog/NewBlog.css';
import Form from './Form';
import nodata from '../../assets/nodata.png';
import ImageUpload from "./thumbnail";
import Preview from "./Preview";
import {ToastContainer,toast} from'react-toastify';

function Draft() {



  // //preview open and colse
  const [isPre, setPre] = useState(false);
  const handlepreClick = (e) => {
    e.preventDefault();
    setPre(!isPre);
  };

  // //preview and form
  const [title, setTitle] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');


  useEffect(() => {
    const ti = JSON.parse(localStorage.getItem("title"));
    const sh = JSON.parse(localStorage.getItem("shortDesc"));
    const ta = JSON.parse(localStorage.getItem("tags"));
    const co = JSON.parse(localStorage.getItem("content"));
    setTitle(ti);
    setShortDesc(sh);
    setTags(ta);
    setContent(co);
  }, []);



  const [thumbnail, setThumbnail] = useState(null);

  function handleFileUpload(file) {
    setThumbnail(file);
  }

  return (

    <div className="newblog-body">
      {isPre ? <Preview ptitle={title} psetTitle={setTitle} pcontent={content} setPre={setPre} />:
        (<>
          <div className='newblog-header'>
            <div className='newblog-header-title'>Draft</div>
            
              <button className='newblog-header-container-button-preview' onClick={handlepreClick}>
                <div className='button-label'>Preview</div>
                <img src={eye} alt="My" className='button-eye' />
              </button>
        
          </div>
          <div className="body-content">
            <div className="form-container">
              <Form thumbnail={thumbnail} 
              title={title} 
              setTitle={setTitle} 
              shortDesc={shortDesc} 
              setShortDesc={setShortDesc} 
              tags={tags}
              setTags={setTags}
              content={content}
              setContent={setContent} />
            </div>
            <div className="right-sidebar">
                <label className="thumb-title">Create Blog Thumbnail</label>
                <ImageUpload value={thumbnail} onUpload={handleFileUpload} />
                <ToastContainer/>
            </div>
          </div>
        </>)
      }


    </div>


  )

  //new chat
 

}

export default Draft;
