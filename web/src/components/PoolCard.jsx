
import React from "react";
import styl from "./PoolCard.module.scss";
import {Link} from "react-router-dom";

export default ({pool}) => (
    <div className={styl.Card}>
        <span className={styl.Card__title}>
            <Link to={`/pools/${pool.id}`}>{pool.title}</Link>
        </span>

        <img className={styl.Card__img} src="/img-placeholder.png" />

        <div className={styl.Card__text}>
            <span>
                <span className={styl.Card__textKey}>wining: </span>
                {pool.wining}
            </span>
            <span>
                <span className={styl.Card__textKey}>by: </span>
                {pool.autor}
            </span>
            <span>
                <span className={styl.Card__textKey}>max: </span>
                {pool.maxVotes}
            </span>
        </div>
    </div>
)