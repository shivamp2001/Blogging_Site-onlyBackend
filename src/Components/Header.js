import React, { } from "react";
import { AppBar, Button,  Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const Header = () => {
    // const[value,setvalue]=useState()
  return (
    <AppBar position="sticky" sx={{background:"radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"}}>
      <Toolbar>
        <Typography variant="h4">BlogsApp</Typography>
        <Box display={"flex"} marginLeft="auto">
           
        </Box>
        <Box display={"flex"} marginLeft="auto">
            <Button variant="contained" sx={{margin:1,color:"yellow", borderRadius:10}}
            LinkComponent={Link} to="/login">Login</Button>

            <Button variant="contained"sx={{margin:1,color:"yellow", borderRadius:10}}
            LinkComponent={Link} to="/signup">Signpu</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
