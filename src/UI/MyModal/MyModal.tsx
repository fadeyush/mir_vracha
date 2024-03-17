import React, { FC } from 'react';
import classes from './MyModal.module.scss';

export interface ModalProps {
    children: React.ReactNode;
    visible: boolean;
    setVisible: (e: boolean) => void;
    className?: string;
}

const MyModal: FC<ModalProps> = ({children, visible, setVisible, className}) => {
    
    const rootClasses = [classes.myModal];

    if(visible) {
        rootClasses.push(classes.myModal__active)
    }
    
    return (
        <div className={rootClasses.join(' ')} onClick={e=>setVisible(false)}>
            <div className={`${classes.myModal__content} ${className}`} onClick={e=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;