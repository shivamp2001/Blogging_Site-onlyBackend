import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";


const Header_Blog = (props) => {
  const [value, setvalue] = useState();
 
  return (
   
    <AppBar
      position="sticky"
      sx={{
        background:
          "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
      }}
    >
      <Toolbar>
        <NavLink to={"/home"} style={{color:"white", textDecoration:"none"}} >
        <Typography variant="h4">BlogsApp</Typography>
        </NavLink>
        <Box display={"flex"} marginLeft="auto">
          <Tabs
            value={value}
            onChange={(e, val) => setvalue(val)}
            textColor="inherit"
          >
            <Tab label="AllBlogs" LinkComponent={Link} to="/blogs" />
            <Tab label="My Blogs" LinkComponent={Link} to="/myblogs" />
            <Tab label="Add Blog" LinkComponent={Link} to="/addblog" />
          </Tabs>
        </Box>
        <Box display={"flex"} marginLeft="auto">
          <Button
            variant="contained"
            sx={{ margin: 1, color: "yellow", borderRadius: 10 }}
            LinkComponent={Link}
            to="/login"
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
    

    
  );
};

export default Header_Blog;
