import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import downarrow from '../../assets/downarrow.png';
import uparrow from '../../assets/uparrow.png';
import eye from '../../assets/eye.png';
import '../../css/blog/NewBlog.css';
import Form from './Form';
import nodata from '../../assets/nodata.png';
import ImageUpload from "./thumbnail";
import Preview from "./Preview";
import axios from 'axios';
import {ToastContainer,toast} from'react-toastify';

const apiConfig = require('../../Data/Api.json');
const api = apiConfig.api;

function EditBlog() {

    const { id } = useParams();
    const blogid = Number(id);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(api+`blog/${blogid}`, {
            headers: {
              'Authorization': `bearer ${apiConfig.token}`
            }
          });
          const d=res.data.data[0];
          setTitle(d.title);
          setShortDesc(d.shortDesc);
          setTags(d.tagName);
          setContent(d.content);
          setThumbnail(d.thumbnail);
          console.log(d.title);
          console.log(d.shortDesc);
          console.log(d.tagName);
          //console.log(d.content);
          console.log(d.thumbnail);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, [blogid]);

  // //open or colse draft dropdown
  const [isOpen, setOpen] = useState(false);
  const handleBlogIconClick = () => {
    setOpen(!isOpen);
  };


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



  // //draft
  const [dtitle, setdTitle] = useState('');
  const [dshortDesc, setdShortDesc] = useState('');
  const [dtags, setdTags] = useState('');
  const [dcontent, setdContent] = useState('');

  useEffect(() => {
    const ti = JSON.parse(localStorage.getItem("title"));
    const sh = JSON.parse(localStorage.getItem("shortDesc"));
    const ta = JSON.parse(localStorage.getItem("tags"));
    const co = JSON.parse(localStorage.getItem("content"));
    setdTitle(ti);
    setdShortDesc(sh);
    setdTags(ta);
    setdContent(co);
  }, [dtitle,dshortDesc]);



  const [thumbnail, setThumbnail] = useState(null);

  function handleFileUpload(file) {
    setThumbnail(file);
  }

  return (

    <div className="newblog-body">
      {isPre ? <Preview ptitle={title} psetTitle={setTitle} pcontent={content} setPre={setPre} />:
        (<>
          <div className='newblog-header'>
            <div className='newblog-header-title'>Add Blog</div>
            <div className='newblog-header-container'>
              <>
                <button className='newblog-header-container-button-draft'  onClick={handleBlogIconClick}>
                  {title === null ? null : <div className="notifydot"></div>}
                  <div className='button-label'>Draft</div>
                  {
                    !isOpen ? (<img src={downarrow} alt="My" className='button-arrow' />) : (<img src={uparrow} alt="My" className='button-arrow' />)
                  }
                </button>
                {
                  isOpen && <div className="draftdropdown">
                    {
                      title === null ? (
                        <div className="draft-nodata">
                          <img src={nodata} alt="no data" className='draft-noimg' />
                          <div>No Draft</div>
                        </div>) :
                        (
                          <div className="draftdropdowncard">
                            <div className="draftcardtitlecontainer">
                              <div className="drafttitle">{dtitle}</div>
                            </div>
                            <div className="draftdesc">{dshortDesc}</div>
                            <div className="draftpending">draft</div>
                          </div>
                        )
                    }
                  </div>
                }
              </>
              <button className='newblog-header-container-button-preview' onClick={handlepreClick}>
                <div className='button-label'>Preview</div>
                <img src={eye} alt="My" className='button-eye' />
              </button>
            </div>
          </div>
          <div className="body-content">
            <div className="form-container">
              <Form 
              blogid={blogid}
              thumbnail={thumbnail} 
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
                <ImageUpload blogid={blogid} value={thumbnail} onUpload={handleFileUpload} />
                <ToastContainer/>
            </div>
          </div>
        </>)
      }


    </div>


  )
}

export default EditBlog
