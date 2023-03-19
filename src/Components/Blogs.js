import React, { useEffect, useState } from "react";
import HeaderBlog from "./HeaderBlog";
import axios from "axios";
import CardBlog from "./CardBlog";

const Blogs = () => {
  const [blogs, setblogs] = useState();
  const sendRequest = async () => {
    let res = await axios
      .get("http://localhost:5000/getallblog")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setblogs(data));
  }, []);
  // console.log(blogs);
  return (
    <div>
      <HeaderBlog />
      {blogs &&
        blogs.data.map((blog, index) => {
          
          return (
            <CardBlog
              id={blog._id}
              blog={blog}
              key={index}
              isuser={localStorage.getItem("userId") === blog.user._id}
            />
          );
        })}
    </div>
  );
};

export default Blogs;
