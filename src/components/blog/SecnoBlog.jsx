import React from 'react';
import nodata from '../../assets/nodata.png';
import '../../css/blog/SecnoBlog.css';

function SecnoBlog() {
  return (
    <div className='secimgcont'>
        <div className='secbody'>
          <img src={nodata} alt="nodata" className='secnoblogimg' />
          <div className='sectext'>No Blogs Selected or Create New Blog</div>
        </div>
    </div>
  )
}

export default SecnoBlog
