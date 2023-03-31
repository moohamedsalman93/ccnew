import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom' ;
import BlogPost from './components/blog/BlogPost';
import EditBlog from './components/blog/EditBlog';
import Header from './components/Header';
import NewBlog from './components/blog/NewBlog';
import NoBlog from './components/blog/NoBlog';
import SecnoBlog from './components/blog/SecnoBlog';
import SideBar from './components/SideBar';
import Blog from './pages/Blog';
import Pages from './pages/Pages';
import Storage from './pages/Storage';


function App() {

  return (
    <BrowserRouter>
      
        <Header/>
          <Routes>
            <Route path='/' element={<SideBar/>}>
              <Route path='/' element={<NoBlog/>}/>
              <Route path="Blog" element={<Blog/>}>
                <Route path='' element={<SecnoBlog/>}/>
                <Route path="newblog" element={< NewBlog/>} />
                <Route path=":id" element={<BlogPost />} />
                <Route path=":id/EditBlog" element={<EditBlog />} />
              </Route>
              <Route path="Storage" element={<Storage/>}/>
              <Route path="Pages" element={<Pages/>}/>
            </Route>
          </Routes>
      
    </BrowserRouter>
  );
}

export default App;
