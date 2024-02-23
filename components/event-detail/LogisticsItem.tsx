import { ReactNode, FunctionComponent, ComponentElement } from 'react';
import classes from './LogisticsItem.module.css';

type LogisticsItemProps = {
  icon: FunctionComponent;
  children: ReactNode;
};

function LogisticsItem(props: LogisticsItemProps) {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export {LogisticsItem} ;
