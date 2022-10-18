import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import styles from './Layout.module.scss';
import Footer from './Footer.jsx';

export default function Layout() {
  return (
    <div className={styles.Layout}>
      Layout
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
