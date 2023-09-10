import { FC } from 'react';
import styles from './Button.module.scss'

interface ButtonProps {
    text: string;
    Icon: FC;
    onClick: () => void;
}

export default function Button({ text, Icon, onClick}: ButtonProps) {

    return (
        <button className={styles.button} onClick={onClick}>
            {text} <Icon />
        </button>
    );
}