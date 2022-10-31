import React from 'react';
import Link from 'next/link';
import Logo from '@/components/header/logo/Logo';
import styles from './tab-bar.module.scss';

function TabBar(): React.ReactElement {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Logo />
        </div>
      </div>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <Link className={styles.navItemLink} href="/">
            首页
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navItemLink} href="/">
            频道
          </Link>
        </li>
        <li className={`${styles.navItem} ${styles.navActiveItem}`}>
          <Link className={styles.navItemLink} href="/live">
            直播
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navItemLink} href="/">
            排行
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navItemLink} href="/">
            我的
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TabBar;