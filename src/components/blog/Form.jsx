import React, { useState } from 'react';
import BlogTitleBox from './form/BlogTitleinput';
import ShortDescBox from './form/ShortDescBox';
import CatDropdown from './form/CatDropdown';
import Richtext from './form/Richtext';
import '../../css/blog/Form.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from "react-router-dom";



const Form = ({ blogid, thumbnail, title, setTitle, shortDesc, setShortDesc, tags, setTags, content, setContent }) => {

  var adrs = useParams();

  const navigate = useNavigate();

  const handleCancel = () => {
    console.log(`${adrs}`)
    localStorage.removeItem("title");
    localStorage.removeItem("shortDesc");
    localStorage.removeItem("tags");
    localStorage.removeItem("content");
    navigate(`/Blog/`);
  };

  const handleDraft = () => {
    localStorage.setItem("title", JSON.stringify(title));
    localStorage.setItem("shortDesc", JSON.stringify(shortDesc));
    localStorage.setItem("tags", JSON.stringify(tags));
    localStorage.setItem("content", JSON.stringify(content));
  };

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('shortDesc', shortDesc);
    formData.append('tags', tags);
    formData.append('content', content);
    formData.append('thumbnail', thumbnail);

    const apiConfig = require('../../Data/Api.json');
    const api = apiConfig.api;
    const accessToken = apiConfig.token;

    // Send POST request using axios or fetch API
    // Send POST request using axios or fetch API
    if (blogid == null) {
      var url = api + 'blog/';
    }
    else {
      var url = api + 'blog/' + blogid + '/';
    };

    axios.post(`${url}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `bearer ${accessToken}`
      }
    })
      .then(response => {
        console.log(response);
        if (response.data.status === "success") {
          toast.success(`${response.data.message}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
        else if (response.data.status === "failed") {
          toast.warn(`${response.data.message}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

        }
      })
      .catch(error => {
        console.error(error.message);
        toast.error(`${error.message}`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  }


  return (
    <form onSubmit={handleSubmit}>

      <BlogTitleBox title={title} handleChange={setTitle} />
      <ShortDescBox value={shortDesc} handleChange={setShortDesc} />
      <CatDropdown valued={tags} setvalued={setTags} />
      <Richtext content={content} setContent={setContent} />
      <div className='button-container'>
        <button
          type="button"
          onClick={handleCancel}
          className="cancelbutton">
          Cancel
        </button>
        <div className='draft-save'>
          <button type='button'
            className="submitbutton" onClick={handleDraft}
          >
            Save Draft
          </button>{
            blogid == null ? <button
              type="submit"
              className="submitbutton"
            >
              Save
            </button> : <button
              type="submit"
              className="submitbutton"
            >
              Update
            </button>
          }

        </div>
      </div>
    </form>
  );
};

export default Form;
