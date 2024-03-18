'use client';
import React, { FC, useState } from 'react';
import classes from './Description.module.scss';
import DescriptionItem from '../descriptionItem/DescriptionItem';
import MyModal from '@/UI/MyModal/MyModal';
import Statistic from '../statistic/Statistic';
import DangerStatistics from '../dangerStatistics/DangerStatistics';
import { DescriptionCardProps } from '@/types/descriptionCard';

const Description: FC = () => {
    const [modalStatistic, setModalStatistic] = useState<boolean>(false);
    const [modalDanger, setModalDanger] = useState<boolean>(false);

    const descriptionArr: DescriptionCardProps[] = [
        {id: 1, info: 'В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание...', query: <>ХОБЛ <b>болеют преимущественно мужчины?</b></>, ikonSrc: '/images/ikons/user.svg', setModalVisible: setModalStatistic},
        {id: 2, info: 'Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение...', query: <><b>Опасно</b> не наличие заболевания, а обострения?</>, ikonSrc: '/images/ikons/stat.svg', setModalVisible: setModalDanger}
    ];

    return (
        <section className={classes.description}>
            <h2 className={classes.description__title}>ХОБЛ: мифы и реальность</h2>
            <ul className={classes.description__list}>
                {descriptionArr.map(description => 
                    <DescriptionItem setModalVisible={description.setModalVisible} key={description.id} ikonSrc={description.ikonSrc} info={description.info} id={description.id} query={description.query}/>
                )}
            </ul>
            <MyModal visible={modalStatistic} setVisible={setModalStatistic}><Statistic/></MyModal>
            <MyModal visible={modalDanger} setVisible={setModalDanger}><DangerStatistics/></MyModal>
        </section>
    );
};

export default Description;