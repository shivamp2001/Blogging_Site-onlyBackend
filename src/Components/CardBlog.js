import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

const Card_Blog = (props) => {
  const[color,setcolor]=useState()
  const navigate = useNavigate();
  const { title, description, image, user } = props.blog;
  const id = props.blog._id;
  console.log();
  const handleEdit = (e) => {
    navigate(`/myblogs/${id}`);
  };

  const deleteBlog = async () => {
    const res = await axios
      .delete(`http://localhost:5000/deletebyid/${id}`)
      .catch((err) => console.log(err));
      let data=await res.data
      return data
  };
  const handleDelete = () => {
    deleteBlog().then(()=>navigate("/")).then(()=>navigate("/blogs"));
  };

  return (
    <div>
      <Card
        sx={{
          border:"1px solid gray",
          width: "40%",
          margin: "auto",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          ":hover": { boxShadow: "10px 10px 20px #ccc" },
        }}
      >
        <CardHeader
        style={{padding:"4px"}}
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" >
              {user.name ? user.name.charAt(0) : ""}
            </Avatar>
          }
          title={title}
        />
        {props.isuser && (
          <Box display={"flex"}>
            <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
              <EditIcon sx={{color:"#1589FF"}} />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteIcon  sx={{color:"red"}}/>
            </IconButton>
          </Box>
        )}
        <CardMedia
          // marginTop="10px"
          component="img"
          height="415"
          image={image}
          alt="Paella dish"
        />
        <CardContent>
          <hr />
         <Box display={"flex"} flexDirection="row">
            <IconButton sx={{color:color, marginLeft:"460px"}} onClick={(color)=>setcolor(color?"red":"")}><FavoriteOutlinedIcon/></IconButton>
            <IconButton sx={{color:"skyblue"}} ><ModeCommentIcon/></IconButton>

         </Box>
          <Typography variant="body2" color="text.secondary">
            <b >Name:</b> {user.name} <br /><b>caption :</b>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Card_Blog;
