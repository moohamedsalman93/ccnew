import React, { useState, useEffect } from "react";
import downarrow from '../../assets/downarrow.png';
import uparrow from '../../assets/uparrow.png';
import eye from '../../assets/eye.png';
import '../../css/blog/NewBlog.css';
import Form from './Form';
import nodata from '../../assets/nodata.png';
import ImageUpload from "./thumbnail";
import Preview from "./Preview";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function NewBlog() {
  // const currentDate = new Date();
  // const formattedDate = currentDate.toLocaleDateString();

  // //open or colse draft dropdown
  // const [isOpen, setOpen] = useState(false);
  // const handleBlogIconClick = () => {
  //   setOpen(!isOpen);
  //   console.log(value);
  // };


  // //preview open and colse
  // const [isPre, setPre] = useState(false);
  // const handlepreClick = () => {
  //   setPre(!isPre);
  // };

  // //preview and form
  // const [value, setValue] = useState({
  //   BlogTitle: "",
  //   ShortDescription: "",
  //   date: formattedDate
  // });
  // const [content, setContent] = useState("");



  // //draft
  // const [values, setValues] = useState({
  //   BlogTitle: "",
  //   ShortDescription: "",
  //   date: ""
  // });
  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem("formData"));
  //   if (storedData) {
  //     setValues(storedData);
  //   }
  //   // const storedContent = JSON.parse(localStorage.getItem("content"));
  //   // if (storedContent) {
  //   //   setContent2(storedContent);
  //   // }
  // }, []);


  // return (

  //   <div className="newblog-body">
  //     {isPre ? <Preview ptitle={value.BlogTitle} pcontent={content} isPre={isPre} setPre={setPre} /> :
  //       (<>
  //         <div className='newblog-header'>
  //           <div className='newblog-header-title'>Add Blog</div>
  //           <div className='newblog-header-container'>
  //             <>
  //               <button className='newblog-header-container-button-draft' onClick={handleBlogIconClick}>
  //                 {values.date === "" ? null : <div className="notifydot"></div>}
  //                 <div className='button-label'>Draft</div>
  //                 {
  //                   !isOpen ? (<img src={downarrow} alt="My" className='button-arrow' />) : (<img src={uparrow} alt="My" className='button-arrow' />)
  //                 }
  //               </button>
  //               {
  //                 isOpen && <div className="draftdropdown">
  //                   {
  //                     values.date === "" ? (
  //                       <div className="w-full h-full flex flex-col justify-center items-center rounded-lg">
  //                         <img src={nodata} alt="no data" className='w-40' />
  //                         <div>No Draft</div>
  //                       </div>) :
  //                       (
  //                         <div className="draftdropdowncard">
  //                           <div className="draftcardtitlecontainer">
  //                             <div className="drafttitle">{values.BlogTitle}</div>
  //                             <div className="draftdate">{values.date}</div>
  //                           </div>
  //                           <div className="draftdesc">{values.ShortDescription}</div>
  //                           <div className="draftpending">draft</div>
  //                         </div>
  //                       )
  //                   }
  //                 </div>
  //               }
  //             </>
  //             <button className='newblog-header-container-button-preview' onClick={handlepreClick}>
  //               <div className='button-label'>Preview</div>
  //               <img src={eye} alt="My" className='button-eye' />
  //             </button>
  //           </div>
  //         </div>
  //         <div className="body-content">
  //           <div className="form-container">
  //             <Form value={value} setValue={setValue} content={content} setContent={setContent} />
  //           </div>
  //           <div className="right-sidebar">
  //             <label className="thumb-title">Create Blog Thumbnail</label>
  //             <ImageUpload />
  //           </div>
  //         </div>
  //       </>)
  //     }


  //   </div>


  // )

  //new chat
 

}

export default NewBlog
