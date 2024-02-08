import React from "react";
import CpxHeader from '../components/CpxHeader'
import CpxFooter from '../components/CpxFooter'
import styl from './Page.module.scss'
import cn from "classnames";

export default ({className, children, title}) => {
    return (
        <div className={styl.Page}>
            <CpxHeader
                title={title}
                className={styl.Page__header}
            />
            <main
                className={cn(className, 'grid-container', styl.Page__content)}
            >
                {children}
            </main>
            <CpxFooter
                className={styl.Page__footer}
            />
        </div>
    )
}
