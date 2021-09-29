import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { NavLink } from "react-router-dom";


export default function Navbar() {
    const style = {
      fontWeight: "bold",
      color: "red",
    };
    return (
      <Tabs>
        <NavLink to="/home" activeStyle={style}><Tab icon={<HomeIcon />} title="Home" /></NavLink>
        <NavLink to="/meals" activeStyle={style}><Tab icon={<FastfoodIcon />} title="Resturant" /></NavLink>
        <NavLink to="/about" activeStyle={style}><Tab icon={<InfoIcon />} title="About us" /></NavLink>        
      </Tabs>
    );
}
