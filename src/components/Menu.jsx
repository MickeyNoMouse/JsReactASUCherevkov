import React from "react";
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

import FooterMenu from "./FooterMenu";
function Menu({ open, onClose }) {
    return (
        <Drawer
            open={open}
            onClose={onClose}
            variant="temporary"
            anchor="left"
            sx={{
                width: '150px', 
                marginTop: '50px', 
            }}
        >
            <List>
                <ListItem>
                    <ListItemText primary="Тут содержимое меню" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Лабораторная 2" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Лабораторная 3" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Лабораторная 4" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Лабораторная 5" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Лабораторная 6" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Лабораторная 7" />
                </ListItem>
            </List>
            <FooterMenu />
        </Drawer>
    );
}

export default Menu;
