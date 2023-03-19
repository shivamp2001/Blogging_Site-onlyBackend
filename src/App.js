// import Header from "./Components/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login"
import Blogs from "./Components/Blogs"
import UserBlogs from "./Components/UserBlogs"
import BlogDetails from "./Components/BlogDetails"
import AddBlog from "./Components/AddBlog"
import Signup from "./Components/Signup";
import HeaderBlog from "./Components/HeaderBlog";
import Home from "./Components/Home";



function App() {
  
 
  return (
    <React.Fragment>
      
      <main>
        <Routes>
          {/* user route */}
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>

           {/* blog route */}
          <Route path="/home" element={<HeaderBlog/>}/>
          <Route path="/addblog" element={<AddBlog/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/blogs/add" element={<AddBlog/>}/>
          <Route path="/myblogs" element={<UserBlogs/>}/>
          <Route path="/myblogs/:id" element={<BlogDetails/>}/>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
