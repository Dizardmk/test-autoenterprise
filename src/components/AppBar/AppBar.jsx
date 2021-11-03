import { ReactComponent as Logo } from './logo.svg';
import styles from './AppBar.module.scss';

export default function AppBar() {
  return (
    <header className={styles.header}>
      <div className={'container'}>
        <h1 className={'visually-hidden'}>autoenterprise instructions</h1>
        <a
          href="/"
          className={'link'}
          aria-label="autoenterprise instructions logo"
        >
          <Logo />
        </a>
      </div>
    </header>
  );
}
