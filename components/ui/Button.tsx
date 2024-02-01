import Link from 'next/link';
import styles from './Button.module.css';

type ButtonProps = {
  link: string;
  children: React.ReactNode;
};

function Button(props: ButtonProps) {
  const { link } = props;

  return (
    <Link href={link} className={styles.btn}>
      {props.children}
    </Link>
  );
}

export { Button };
