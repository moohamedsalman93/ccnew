import React,{useState} from 'react';
import SecSidebar from '../reusable/SecSidebar';
import Button from '../reusable/Button';
import CardList from '../components/blog/Card';
import {Outlet} from "react-router-dom";
import '../css/blog/Blog.css';
import createblog from '../assets/createblog.png';
import SerachBox from '../components/blog/SearchBox';




function Blog() {

  const[query,setquery]=useState("");

  return (
    <div className='content'>
      <SecSidebar>
          <Button>
            <p className='create-button-title'>Create Blog</p>
            <img src={createblog} alt="createblog" className='create-button-icon' />
          </Button>
          <SerachBox setquery={setquery}/>
          <CardList query={query}/>
      </SecSidebar>
      <Outlet />
    </div>
  )
}

export default Blog;

