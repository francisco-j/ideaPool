
import React from "react";
import styl from "./IdeaCard.module.scss";
import cn from "classnames";

export default ({idea}) => (
    <div className={styl.Card}>
        <span className={styl.Card__title}>
            {idea.title}
        </span>

        <img className={styl.Card__img} src="/img-placeholder.png" />

        <div className={styl.Card__text}>
            <span>
                <span className={styl.Card__textKey}>by: </span>
                {idea.autor}
            </span>
            <span>
                {idea.description}
            </span>
        </div>
        <div className={styl.Card__btnsContainer}>
            <button className={cn(styl.Card__btn, {
                [styl.Card__btn_selected]: idea.hasOwnUpVote
            })}>
                <span className={styl.Card__btnText}>
                    {idea.downVotes}
                </span>
                <img
                    className={styl.Card__btnIcon}
                    src="/lifesaver.png"
                />
            </button>
            <button className={cn(styl.Card__btn, {
                [styl.Card__btn_selected]: idea.hasOwnDownVote
            })}>
                <span className={styl.Card__btnText}>
                    {idea.upVotes}
                </span>
                <img
                    className={styl.Card__btnIcon}
                    src="/anchor.png"
                />
            </button>
        </div>
    </div>
)