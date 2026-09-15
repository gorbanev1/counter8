import { NavLink, Outlet } from 'react-router';
import styles from './components/Site.module.css';
import { S } from './components/pages/_styles';
import { PATHS } from './routes/paths';

export const App = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>

      <div className={styles.body}>
        <div className={styles.nav}>
          <S.NavWrapper>
            <NavLink to={PATHS.ADIDAS}>Adidas</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATHS.PUMA}>Puma</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATHS.ABIBAS}>Abibas</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATHS.PRICES}>Цены для оптовиков</NavLink>
          </S.NavWrapper>
        </div>

        <main className={styles.content}>
          <Outlet />
        </main>
      </div>

      <div className={styles.footer}>abibas 2026</div>
    </div>
  );
};
