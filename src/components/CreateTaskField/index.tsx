import styles from './CreateTaskField.module.scss'

interface CreateTaskFieldProps {
    placeholder?: string;
    onChange: (event : React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
}

export default function CreateTaskField( { placeholder, onChange, value, onKeyDown } : CreateTaskFieldProps) {
    return (
        <input
            type='text'
            value={value}
            placeholder={placeholder}
            onKeyDown={onKeyDown}
            className={styles.inputTaskField}
            onChange={onChange}
        />
    );
}