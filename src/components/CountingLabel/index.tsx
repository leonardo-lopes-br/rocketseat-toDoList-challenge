import styles from './CountingLabel.module.scss'


interface CountingLabelProps {
    text: string;
    color?: string;
    amount?: number;
    type?: 'simple' | 'progress';
    tasksDoneCount: number;
}

export default function CountingLabel( { text, color = '#fff', amount = 0, type = 'simple', tasksDoneCount = 0}: CountingLabelProps ) {
    return (
        <div className={styles.countingLabel_container}>
            <h4 style={{color: `var(${color})`}}>{text}</h4>
            {type === 'simple' && <span>{amount}</span>}
            {type === 'progress' && amount > 0 && <span>{`${tasksDoneCount} de ${amount}`}</span>}
            {type === 'progress' && amount === 0 && <span>{amount}</span>}

        </div>
    )
}