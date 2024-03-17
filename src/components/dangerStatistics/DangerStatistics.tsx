import React, { FC, ReactNode } from 'react';
import classes from './DangerStatistics.module.scss';
import DangerStatisticsItem from '../DangerStatisticsItem/DangerStatisticsItem';

interface DangerStatisticsProps {
    id: number;
    ikonSrc: string;
    percent: string;
    info: string | ReactNode;
    source: string | ReactNode;
}

const DangerStatistics: FC = () => {

    const survivalArr:DangerStatisticsProps[] = [
        {id: 1, ikonSrc: '/images/ikons/heart.svg', percent: '45,5%', info:<>пациентов с <b>сердечной недостаточностью<sup>1</sup></b></>, source: <>Популяционное когортное <br></br>исследование (N=385)</>},
        {id: 2, ikonSrc: '/images/ikons/man.svg', percent: '55,3%', info:<>пациентов с <b>инфарктом миокарда<sup>1</sup></b></>, source: 'Апостериорный анализ когортного исследования (N=2887)'},
        {id: 3, ikonSrc: '/images/ikons/bladde.svg', percent: '50,5%', info:<>пациентов с <b>раком мочевого пузыря</b></>, source: 'Исследование Национальной статистической службы (N=42642)'}
    ]
    return (
        <section className={classes.dangerStatistics}>
            <div className={classes.dangerStatistics__wrapper}>
                <b className={classes.dangerStatistics__first}>Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение 3 лет у 77% пациентов<sup>1</sup>.</b>
                <p>В течение 5 лет после первого тяжёлого обострения в живых остаются только 40% пациентов.<sup>2</sup> Прогноз после обострений ХОБЛ схож с таковым при сердечной недостаточности, инфаркте миокарда и некоторых злокачественных опухолях.</p>
            </div>
            <h3 className={classes.dangerStatistics__title}>Пятилетняя выживаемость пациентов</h3>
            <ul className={classes.dangerStatistics__list}>
                {survivalArr.map(survival=>
                    <DangerStatisticsItem id={survival.id} percent={survival.percent} ikonSrc={survival.ikonSrc} source={survival.source} info={survival.info}/>
                )}
            </ul>
        </section>
    );
};

export default DangerStatistics;