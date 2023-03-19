import axios from "axios";
import React, { useEffect, useState } from "react";

import CardBlog from "./CardBlog";
import HeaderBlog from "./HeaderBlog";

const UserBlogs = () => {
  
  const [blogs,setblogs]=useState()
  const id = localStorage.getItem("userId");
  const sendRequest = async () => {
    let res = await axios
      .get(`http://localhost:5000/getblogbyuserid/${id}`)
      .catch((err) => console.log(err));
      const data= await res.data
      return data
  };
  // console.log(blogs);
  useEffect(() => {
    sendRequest().then((data)=>setblogs(data.data.blogs))
  }, []);
  // console.log(blogs)
  return (
    <div>
      <HeaderBlog />
      {
      blogs && blogs.map((blog,index)=>{
        return(
          <CardBlog blog={blog} key={index} isuser={true}/>
        )
    })
      }
    </div>
  );
};

export default UserBlogs;
