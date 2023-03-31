import React from 'react'
import searchicon from '../../assets/searchicon.png';
import '../../css/blog/SearchBox.css';

function SearchBox({setquery}) {
  return (
    <div className='searchbox'>
            <input type="text" placeholder='Search by Category' className='inputBox ' onChange={(e)=>setquery(e.target.value)} />
            <img src={searchicon} alt="searchicon" className='searchicon'/>
    </div>
  )
}

export default SearchBox;
