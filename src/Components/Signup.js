import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import axios from "axios"
import{ Link, useNavigate } from "react-router-dom"
import Header from "./Header";


const Signup = () => {
  const navigate=useNavigate()
  
  const [inputs, setinputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const sendRequest=async()=>{
   let res=await axios.post(`http://localhost:5000/signup`,{
      name:inputs.name,
      email:inputs.email,
      password:inputs.password
    }).catch(err=>console.log(err))
    const data= await res.data
    return data
  }
  // console.log(data);
  const handelChange=(e)=>{
    setinputs((prevstate)=>({
        ...prevstate,
        [e.target.name]:e.target.value
    }))
  }
  const handelSubmit=(e)=>{
     e.preventDefault();
    //  sendRequest().then((data)=>console.log(data.data._id))
       sendRequest().then((data)=>localStorage.setItem("userId",data.data._id)).then(()=>navigate("/login"))
  }
  return (
    <div>
       <Header />
   { inputs &&  (<form onSubmit={handelSubmit}>
        <Box
          maxWidth={350}
          display={"flex"}
          flexDirection="column"
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
        >
          <Typography padding={3} textAlign="center" variant="h3">
          Signup
          </Typography>
        
            <TextField onChange={handelChange} value={inputs.name} margin="normal" placeholder="Name"name="name" />
         
          <TextField
            onChange={handelChange}           
            value={inputs.email}
            margin="normal"
            placeholder="Email"
            type={"email"}
            name="email"
            
          />
          <TextField
            onChange={handelChange}
            value={inputs.password}
            margin="normal"
            placeholder="Password"
            type={"password"}
            name="password"
          />
          <Button
            type="submit"
            color="warning"
            sx={{ borderRadius: 3, mt: 3 }}
            variant="contained"

          >
            Signup
          </Button>
          <Button
            LinkComponent={Link} to="/login"
            sx={{ borderRadius: 3, mt: 3 }}
          >
          change to login</Button>
        </Box>
      </form>)}
    </div>
  );
};

export default Signup;
