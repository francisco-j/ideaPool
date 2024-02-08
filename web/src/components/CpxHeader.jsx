import React, {useState} from "react";
import avatar from '/avatar.png'
import logo from '/logo.png'
import javier from '../assets/javier.jpg'
import cn from 'classnames';
import styl from "./CpxHeader.module.scss";
import {Link} from "react-router-dom";

export default ({title, className}) => {
    const [user, setUser] = useState()

    return (
        <header className={cn(styl.Header, className)}>
            <div className={cn(styl.Header__container, 'grid-container')}>
                <Link to="/">
                    <img
                        className={styl.Header__logo}
                        src={logo}
                    />
                </Link>
                <span className={styl.Header__title}>
                    {title}
                </span>
                <img
                    className={styl.Header__avatarImg}
                    src={user ? javier : avatar}
                />
            </div>
        </header>
    );
}
