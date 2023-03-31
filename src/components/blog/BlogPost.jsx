
import { useParams,useNavigate } from "react-router-dom";
import'../../css/blog/Blogpost.css';
import editblog from '../../assets/editblog.png';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


  const apiConfig = require('../../Data/Api.json');
  const api = apiConfig.api;


function BlogPost() {

  const navigate = useNavigate();
  const [sData, SetsData] = useState([]);

  const handlePostClick = () => {
    navigate(`/Blog/${id}/EditBlog`);
   
  }
  
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
          SetsData(res.data.data[0]);
        } catch (err) {
          console.log(err);
          SetsData({});
        }
      };
      fetchData();
    }, [blogid]);
    

  return (
    <div className='Blog-post'>
      {sData && sData.title &&
        <div className='Blog-post-Header'>
          <label className='Blog-post-Title'>{sData.title}</label>
          <button className='Blog-post-editbutton' onClick={handlePostClick}>
            <label>Edit</label>
            <img src={editblog} alt="e" className='editicon' />
          </button>
        </div>
      }
      <div className='Blog-post-content'>
        {sData && sData.content &&
          <div dangerouslySetInnerHTML={{ __html: sData.content }} />
        }
      </div>
    </div>
  );
  
}

export default BlogPost;