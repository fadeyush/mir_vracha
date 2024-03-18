import React, { FC } from 'react';
import classes from './DangerStatisticsItem.module.scss';
import { DangerStatisticsProps } from '@/types/dangerStatistics';

const DangerStatisticsItem: FC<DangerStatisticsProps> = ({ikonSrc, percent, info, source}) => {
    return (
        <li className={classes.dangerStatistics__item}>
            <img className={classes.dangerStatisticsItem__ikonContent} src={ikonSrc} alt='Иконка'></img>
            <p className={classes.dangerStatisticsItem__percent}><b>{percent}</b></p>
            <p className={classes.dangerStatisticsItem__info}>{info}</p>
            <p className={classes.dangerStatisticsItem__source}>{source}</p>
        </li>
    );
};

export default DangerStatisticsItem;