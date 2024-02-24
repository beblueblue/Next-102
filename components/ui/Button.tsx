import { ReactEventHandler } from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

type NormalButtonProps = {
  onClick?: ReactEventHandler;
  children: React.ReactNode;
};

type LinkButtonProps = {
  link: string;
  children: React.ReactNode;
};

function Button(props: NormalButtonProps | LinkButtonProps) {
  const { link, onClick } = props as NormalButtonProps & LinkButtonProps;

  if (!link) {
    return (
      <button onClick={onClick} className={styles.btn}>
        {props.children}
      </button>
    );
  }

  return (
    <Link href={link} className={styles.btn}>
      {props.children}
    </Link>
  );
}

export { Button };
