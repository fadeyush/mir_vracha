import React, { FC, ReactNode } from 'react';
import classes from './DescriptionItem.module.scss';

interface DescriptionCardProps {
    ikonSrc: string;
    info: string;
    query: string | ReactNode;
    id: number;
}

const DescriptionItem: FC<DescriptionCardProps> = ({ikonSrc, info, query}) => {

    
    return (
        <li className={classes.description__item}>
            <div className={classes.description__ikon}>
                <img className={classes.description__ikonContent} src={ikonSrc} alt='Иконка'></img>
            </div>
            <div className={classes.description__queryWrapper}>
                <p className={classes.description__query}>{query}</p>
            </div>
            <p className={classes.description__info}>{info}</p>
            <button className={classes.description__button}><span className='visually-hidden'>Открыть</span></button>
        </li>
    );
};

export default DescriptionItem;