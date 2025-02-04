import React from "react";
import styles from "./header.module.scss";
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const headerMenu = {
    "Home": "/",
    "CVCustomizer": "/CVCustomizer",
    "Me ?": "/me",
    "Contact Us": "/contact",
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}> 
        <Image
          priority
          src={"/logo.svg"}
          alt="Logo"
          width={80}
          height={80}
        />
      </div>
      <div className={styles.menuWrapper}>
        {Object.entries(headerMenu).map(([name, path]) => (
          <Link key={name} href={path} passHref legacyBehavior>
            <div className={styles.menu}>{name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
