import React, { FC } from 'react';
import classes from './FocusItem.module.scss';
import { FocusItemProps } from '@/types/focusItem';

const FocusItem: FC<FocusItemProps> = ({id, header, info, isFullCard}) => {

    const rootClasses = [classes.focusItem];

    if(isFullCard) {
        rootClasses.push(classes.directions__item)
    } else {
        rootClasses.push(classes.recommendations__item)
    }
    
    if(!isFullCard) {
        return ( 
            <li className={rootClasses.join(' ')}>
                <p className={classes.focusItem__info}>{info}</p>
            </li>
        );
    }

    return ( 
        <li className={rootClasses.join(' ')}>
            <div className={classes.focusItem__ikon}>
                <span className={classes.focusItem__id}>{id}</span>
            </div>
            <p className={classes.focusItem__title}>{header}</p>
            <p className={classes.focusItem__info}>{info}</p>
        </li>
    );
};

export default FocusItem;