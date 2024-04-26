import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Container>
   
                    <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                       Черевков Михаил aka M1ck3y, гр.4.105-2
                    </Typography>
                    
                </Container>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
