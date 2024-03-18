import React, { FC } from 'react';
import classes from './DirectionsSrategy.module.scss';
import FocusItem from '../focusItem/FocusItem';
import { FocusItemProps } from '@/types/focusItem';

const DirectionsSrategy: FC = () => {
    const directionsArr: FocusItemProps[] = [
        {id: 1, header: <>Ингаляционный <b>антихолинергик</b></>, info: <>Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в конкурентный антагонизм за взаимодействие с эффекторными мускариновыми рецепторами, дополняет и потенцирует эффект β2-агонистов<sup>1</sup></>, isFullCard: true},
        {id: 2, header: <>Ингаляционный <br></br><b>β2-агонист</b></>, info:  'Вызывает бронходилатацию посредством релаксации гладкомышечных клеток бронхов независимо от характера констриктивных стимулов, т. е. выступают в качестве функциональных антагонистов бронхоконстрикции', isFullCard: true},
        {id: 3, header: <>Ингаляционный <b>глюкокортикостероид</b> (ИГКС)</>, info:  'Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют хроническое воспаление при астме и снижают гиперреактивность дыхательных путей', isFullCard: true},
    ];

    const recommendationsArr: FocusItemProps[] = [
        {id: 1, info: <>Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров с разными механизмами действия;  <br></br>Назначение 2-х бронходилататоров из группы длительнодействующих β2-агонистов (ДДБА) и длительнодействующих антихолинергиков (ДДАХ), действие которых дополняет и усиливает друг друга<sup>1</sup>.</>, isFullCard: false},
        {id: 2, info: <>Пациентам с ХОБЛ и частыми обострениями (≥2 среднетяжелых обострений в течение 1 года/1 тяжелое обострение, потребовавшее госпитализации) рекомендуется назначение ИГКС в дополнение к ДДБА; <br></br>Последние исследования показали, что амбулаторное применение ИГКС/ДДБА у пациентов с ХОБЛ снижает госпитальную летальность по сравнению с пациентами, принимавшими только ДДБА (8,1% vs 13,2%)<sup>1</sup>.</>, isFullCard: false},
    ];
    return (
        <div className={classes.DirectionsSrategy__wrapper}>
            <h3 className={classes.DirectionsSrategy__title}>Приоритетные направления фармакотерапевтической стратегии при ХОБЛ<sup>1</sup>:</h3>
            <div className={classes.DirectionsSrategy__listWrapper}>
                <div className={classes.DirectionsSrategy__listFirstWtapper}>
                    <ul className={classes.DirectionsSrategy__list}>
                        {directionsArr.map(direction =>
                            <FocusItem key={direction.id} id={direction.id} info={direction.info} header={direction.header} isFullCard={direction.isFullCard}/>    
                        )}
                    </ul>
                    <div  className={classes.DirectionsSrategy__arrowWrapper}>
                        <hr className={classes.DirectionsSrategy__arrow}></hr>
                        <hr className={classes.DirectionsSrategy__arrow}></hr>
                    </div>
                </div>
                <ul className={classes.DirectionsSrategy__list}>
                    {recommendationsArr.map(recommendation =>
                        <FocusItem  key={recommendation.id} id={recommendation.id} info={recommendation.info} isFullCard={recommendation.isFullCard}/>    
                    )}
                </ul>
            </div>
        </div>
    );
};

export default DirectionsSrategy;