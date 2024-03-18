import React, { FC } from 'react';
import classes from './FocusSection.module.scss';
import DirectionsSrategy from '../directionsSrategy/DirectionsSrategy';

const FocusSection: FC = () => {
    return (
        <section className={classes.FocusSection}>
            <h2 className={classes.FocusSection__title}>Терапия ХОБЛ: что в фокусе?</h2>
            <h3 className={classes.FocusSection__header}>Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии</h3>
            <DirectionsSrategy/>
        </section>
    );
};

export default FocusSection;