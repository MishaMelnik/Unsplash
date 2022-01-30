import React, {useState} from 'react';
import './Header.scss'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {AppBar, Toolbar} from "@mui/material";
import {IconButton} from "@material-ui/core";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import SearchIcon from "@mui/icons-material/Search";
import {NavLink} from "react-router-dom";

const navbarLinks = [
    {url: "/", title: "Home"},
    {url: "/featured_collections", title: "Featured collections"},
    {url: "/my_profile", title: "My profile"}
];


const Header = () => {
    const [menuClicked, setMenuClicked] = useState(true);

    const toggleMenuClick = () => {
        setMenuClicked(!menuClicked);
    }
    return (
            <AppBar>
                <Toolbar className="navbar">
                    {menuClicked ? (
                        <IconButton onClick={toggleMenuClick}>
                            <MenuIcon className="navbar_menu"/>
                        </IconButton>
                    ) : (
                        <IconButton onClick={toggleMenuClick}>
                            <CloseIcon className="navbar_menu"/>
                        </IconButton>
                    )}
                    <aside>
                        <ul className={menuClicked ? "navbar_list" : "navbar_list navbar_list--active"}>
                            {navbarLinks.map((item) => {
                                return (
                                    <li className="navbar_item" key={item.title}>
                                        <NavLink exact className="navbar_link" activeClassName="active_navbar_link" to={item.url}>
                                            {item.title}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </aside>
                    <IconButton>
                        <PersonOutlineRoundedIcon/>
                    </IconButton>
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
    );
};

export default Header;
