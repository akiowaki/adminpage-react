import React from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ProductionQuantityLimitsRoundedIcon from '@mui/icons-material/ProductionQuantityLimitsRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import BackupTableRoundedIcon from '@mui/icons-material/BackupTableRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className='sidebar'>
            <div className='top'>
            <Link to="/" style={{ textDecoration: "none" }}>
                <span className='logo'>MarvelAdmin</span>
                </Link>
                </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className="title">メイン</p>
                    <Link to="/" style={{ textDecoration: "none" }}>
                    <li>
                    <DashboardIcon className='icon'/>
                        <span>Dashboard</span>
                    </li>
                    </Link>
                    <p className="title">リスト</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                    <li>

                        <PeopleOutlinedIcon  className='icon'/>
                        <span>ユーザー</span>
                    </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                    <li>
                        <ProductionQuantityLimitsRoundedIcon className='icon'/>
                        <span>商品</span>
                    </li>
                    </Link>
                    <li>
                        <CreditCardRoundedIcon className='icon'/>
                        <span>注文</span>
                    </li>
                    <li>
                        <LocalShippingRoundedIcon className='icon'/>
                        <span>デリバリー</span>
                    </li>
                    <p className="title">ユーズフル</p>
                    <li>
                        <AssessmentRoundedIcon className='icon'/>
                        <span>ステータス</span>
                    </li>
                    <li>
                        <NotificationsNoneRoundedIcon className='icon'/>
                        <span>通知</span>
                    </li>
                    <p className="title">サービス</p>
                    <li>
                        <BackupTableRoundedIcon className='icon'/>
                        <span>ログ</span>
                    </li>
                    <li>
                        <SettingsRoundedIcon className='icon'/>
                        <span>設定</span>
                    </li>
                    <p className="title">ユーザー</p>
                    <li>
                        <PermContactCalendarRoundedIcon className='icon'/>
                        <span>プロファイル</span>
                    </li>
                    <li>
                        <ExitToAppRoundedIcon className='icon'/>
                        <span>ログアウト</span>
                    </li>

                </ul>
            </div>
            <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
    );
};

export default Sidebar;