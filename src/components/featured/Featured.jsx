import React from 'react';
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {

    return (
      <div className="featured">
        <div className="top">
          <h1 className="title">総収益</h1>
          <MoreVertIcon fontSize="small" />
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
          </div>
          <p className="title">本日の売上</p>
          <p className="amount">584,548円</p>
          <p className="desc">
            過去一の売上だよ！
          </p>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">目標</div>
              <div className="itemResult negative">
                <KeyboardArrowDownIcon fontSize="small"/>
                <div className="resultAmount">¥548,874</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">先週</div>
              <div className="itemResult positive">
                <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                <div className="resultAmount">¥388,874</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">先月</div>
              <div className="itemResult positive">
                <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                <div className="resultAmount">¥448,874</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Featured;