import { Button, InputLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBlog from "./HeaderBlog";
const lablestyle = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "24px" };
const AddBlog = () => {
  // console.log(localStorage.getItem("user"));
  const navigate=useNavigate()
  const [inputs, setinputs] = useState({
    title: "",
    description: "",
    image: "",
  });
  const sendRequest=async()=>{
    let res= await axios.post("http://localhost:5000/addblog",{
      title:String(inputs.title),
      description:String(inputs.description),
      image:String(inputs.image),
      user:localStorage.getItem("userId")
    }).catch((err)=>console.log(err));
    let data= await res.data
    return data
  }
  // console.log(inputs);

  const handlechange=(e)=>{
    setinputs((prevstate)=>({
      ...prevstate,
      [e.target.name]:e.target.value
  }))
  }
  const handelSubmit=(e)=>{
   e.preventDefault();
  //  console.log(inputs);
  sendRequest().then(()=>navigate("/myblogs"))
 
  }
  return (
    <div>
      <HeaderBlog />
     
      { inputs && (<form onSubmit={handelSubmit}>
        <Box
          border={3}
          borderColor="skyblue"
          marginTop={10}
          marginLeft="100px"
          borderRadius={10}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          display={"flex"}
          flexDirection="column"
          width={"80%"}
        >
          <Typography
            fontWeight={"bold"}
            padding="3px"
            color={"gray"}
            variant="h2"
            textAlign={"center"}
          >
            Post Your Blog
          </Typography>
          <InputLabel sx={lablestyle}>Title</InputLabel>
          <TextField    value={inputs.title} onChange={handlechange} name="title"/>
          <InputLabel margin="auto" sx={lablestyle}>
            Description
          </InputLabel>
          <TextField  value={inputs.description} onChange={handlechange} name="description"/>
          <InputLabel margin="auto" sx={lablestyle}>
            ImageUrl
          </InputLabel>
          <TextField  value={inputs.image} onChange={handlechange} name="image"/>
          <Button type="submit" sx={{mt:2,borderRadius:4}} variant="contained" color="warning">Add Blog</Button>
        </Box>
      </form>)}
    </div>
  );
};

export default AddBlog;
