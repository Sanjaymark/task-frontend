import { AppBar, Box, Button, Toolbar} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () =>{

    const Navigate = useNavigate();
    return(
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Button color="inherit" onClick={() => Navigate("/")}>Dashboard</Button>
                        <Button color="inherit" onClick={() => Navigate("/blogs")}>Blogs</Button>
                        <Button color="inherit" onClick={() => Navigate("/blog/user")}>UserBlogs</Button>
                        <Button color="inherit" onClick={() => Navigate("/add/blogs")}>Add Blogs</Button>
                        <Button color="inherit" onClick={() => Navigate("/login")}>Login</Button>
                        <Button color="inherit" onClick={() => Navigate("/signup")}>Signup</Button>  
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}