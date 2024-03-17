import React, { FC } from 'react';
import classes from './Statistic.module.scss'
import Image from 'next/image';

const Statistic: FC = () => {
    return (
        <section className={classes.statistic}>
            <div className={classes.statistic__wrapper}>
                <p>В десятилетнем исследовании <b> «Генетическая эпидемиология ХОБЛ» (COPDGene)</b> среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание женщин (66%), а в возрасте 60-64 лет количество женщин и мужчин.</p>
                <p>Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть связано с тем, что дыхательные пути курящих женщин имеют более <b>высокий процент площади стенок</b> , но меньшую площадь просвета, внутренний диаметр и толщину дыхательных путей по сравнению с курящими мужчинами.</p>
            </div>
            <Image src='images/statistic.svg' alt='Эпидемиологическое распределение ХОБЛ среди мужчин и женщин, %' width={1211} height={389}></Image>
        </section>
    );
};

export default Statistic;