import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import { DarkModeContext } from "../../context/darkModeContext";
import React,{ useContext }  from 'react';
import './navbar.scss';

const Navbar = () => {
    const { darkMode , dispatch } = useContext(DarkModeContext);
  
    return (
      <div className="navbar">
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder="検索..." />
            <SearchRoundedIcon />
          </div>
          <div className="items">
            <div className="item">
              <LanguageRoundedIcon className="icon" />
              English
            </div>
            <div className="item">
              {darkMode===false?<DarkModeOutlinedIcon
                className="icon"
                onClick={() => dispatch({ type: "TOGGLE" })}
              />:<WbSunnyRoundedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />}
              
              
            </div>
            <div className="item">
              <FullscreenExitOutlinedIcon className="icon" />
            </div>
            <div className="item">
              <NotificationsNoneOutlinedIcon className="icon" />
              <div className="counter">1</div>
            </div>
            <div className="item">
              <ChatBubbleOutlineOutlinedIcon className="icon" />
              <div className="counter">2</div>
            </div>
            <div className="item">
              <ListOutlinedIcon className="icon" />
            </div>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="avatar"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;