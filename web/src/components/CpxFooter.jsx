import React from "react";
import cn from 'classnames';
import styl from "./CpxFooter.module.scss";

export default ({className}) => {
    return (
        <footer className={cn(className, styl.Footer)}>
            <div className={cn(styl.Footer__container, 'grid-container')}>
                <span className={styl.Footer__year}>
                    2024
                </span>
            </div>
        </footer>
    );
}
