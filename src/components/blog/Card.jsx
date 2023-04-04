import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import '../../css/blog/Card.css';
import formatDate from '../../utils/dateFormate';
import sortup from '../../assets/sortup.png';
import sortdown from '../../assets/sortdown.png';
import axios from 'axios';
import user from '../../assets/user.png';

  const apiConfig = require('../../Data/Api.json');
  const api = apiConfig.api;
  const accessToken = apiConfig.token;

function Card({ post, onPostClick }) {

  const rootStoragePath = 'storage/test_test/';
  const thumbnailUrl = api+rootStoragePath + post.thumbnail;
  const navigate = useNavigate();
  const { id } = useParams();
  
  const handlePostClick = () => {
    navigate(`/Blog/${post.id}`);
  }
  const [cid] = useState(post.id);

  return (
    <div className={cid === Number(id) ? "card-green" : "card"} onClick={handlePostClick}>
      <div className='title-tag'>
        <h2 className="card-title">{post.title}</h2>
        <div className='tagname'>{post.tagName}</div>
      </div>
      <div className='thumb-short'>
        <img src={thumbnailUrl} alt="s" className='thumb-img' />
        <p className="card-desc">{post.shortDesc}</p>
      </div>
      <div className="card-image-label">
        <img src={user} alt={post.authorName} className='card-image' />
        <p className="card-label">salman</p>
      </div>
      <p className="card-date">{formatDate(post.createdOn)}</p>
    </div>
  );
}


function CardList({ query }) {
  const [isOpen, setOpen] = useState(false);
  const [Category, setCategory] = useState(false);
  const [Date, setDate] = useState(false);
  const [Last, setLast] = useState(false);

  


  //fetch data
  const [sData, SetsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(api + 'blog/', {
          headers: {
            'Authorization': `bearer ${accessToken}`
          }
        });
        SetsData(res.data.data);
      } catch (err) {
        console.log(err);
        SetsData([]);
      }
    };

    const searchData = async () => {
      try {
        const res = await axios.get(api + `blog/search/?q=${query}`
        , {
          headers: {
            'Authorization': `bearer ${accessToken}`
          }
        });
        SetsData(res.data.data);
      } catch (err) {
        console.log(err);
        SetsData([]);
      }
    };


    if(query == ''){fetchData();
    }
    else{
      searchData();
    }
  }, [sData]);


  const handleclick = () => {
    setOpen(!isOpen);
  }

  // const category = () => {
  //   handleclick();
  //   setCategory(!Category);
  //   setDate(false);
  //   setLast(false);
  // }
  // const date = () => {
  //   handleclick();
  //   setCategory(false);
  //   setDate(!Date);
  //   setLast(false);
  // }
  // const last = () => {
  //   handleclick();
  //   setCategory(false);
  //   setDate(false);
  //   setLast(!Last);
  // }

  // let sortedData = [...CardListData]; // Create a copy of the CardListData array

  // if (Date) { // If "Date created" is selected, sort the data by date in ascending order
  //   // Sort CardListData by date in ascending order
  //   CardListData.sort((a, b) => {
  //     const dateA = new Date(a.date);
  //     const dateB = new Date(b.date);
  //     return dateA - dateB;
  //   });

  // }

  // // // if (Last) { // If "Last update" is selected, sort the data by lastUpdated in descending order
  // // //   sortedData.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
  // // // }


  return (
    <div className="card-container">
      <div className='listandsort-container'>
        <div className="listofblog-name">List of Blogs</div>
        <div>
          <button className='sort-button' onClick={handleclick}>
            <label className='sort-text'>
              Sort by
            </label>
            {
              isOpen ? (<img src={sortup} alt="sort" className='sort-icon' />) : (<img src={sortdown} alt="sort" className='sort-icon' />)
            }
          </button>
          {
            isOpen && (<dir className='sortdrop-container'>
              <div className='sortlist'>
                <button className='dotandlabel'>
                  {Category ? <div className='dot' /> : <div className='undot' />}
                  <div>Category</div>
                </button>
                <button className='dotandlabel'>
                  {Date ? <div className='dot' /> : <div className='undot' />}
                  <div>Date created</div>
                </button>
                <button className='dotandlabel'>
                  {Last ? <div className='dot' /> : <div className='undot' />}
                  <div>Last update</div>
                </button>
              </div>
            </dir>)
          }
        </div>
      </div>
      <div className='cardlist'>
        {sData == null ? <div>no blog</div> :
          sData.map((item) => (
            <Card key={item.id} post={item} />
          ))

        }
      </div>

    </div>
  );
}

export default CardList;