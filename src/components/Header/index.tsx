
import Logo from '../Icons/RocketSeatLogo.tsx';
import styles from './Header.module.scss';

interface HeaderProps {
    title: string;
}

export default function Header({ title }: HeaderProps) {

    const titleSize = title.length;
    const beginningTitle = title.slice(0, titleSize / 2);
    const endingTitle = title.slice(beginningTitle.length, title.length);

    return (
        <header className={styles.header}>
            <Logo />
            <div className={styles.title}>
                <span>{beginningTitle}</span>
                <span>{endingTitle}</span>
            </div>
        </header>
    );
}