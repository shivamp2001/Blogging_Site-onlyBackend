import { Button, InputLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderBlog from "./HeaderBlog";
const lablestyle = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "24px" };

const BlogDetails = () => {
  const navigate=useNavigate()

  const [inputs, setinputs] = useState();

  const id = useParams().id;

  useEffect(() => {
    const fetchDetails = async () => {
      await axios
        .get(`http://localhost:5000/getbyid/${id}`)
        .then((res) => res.data).then((data)=>setinputs(data.data))
    };
    fetchDetails()
  }, [id]);
  
  const updateBlog=async()=>{
    axios.put(`http://localhost:5000/updateblog/${id}`,{
      title:String(inputs.title),
      description:String(inputs.description),
      image:String(inputs.image),
      
    }).catch(err=>console.log(err))
  }
  const handelSubmit=(e)=>{
    e.preventDefault();
    updateBlog().then(()=>navigate("/myblogs"))

  }
  let handlechange=(e)=>{
     setinputs((prevstate)=>({
       ...prevstate,
       [e.target.name]:e.target.value
   }))
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
            Update Your Blog
          </Typography>
          <InputLabel sx={lablestyle}>Title</InputLabel>
          <TextField    value={inputs.title} onChange={handlechange} name="title"/>
          <InputLabel margin="auto" sx={lablestyle}>
            Description
          </InputLabel>
          <TextField  value={inputs.description} onChange={handlechange} name="description"/>
          
          <Button type="submit" sx={{mt:2,borderRadius:4}} variant="contained" color="warning">submit</Button>
        </Box>
      </form>)}
    </div>
  );
};

export default BlogDetails;
