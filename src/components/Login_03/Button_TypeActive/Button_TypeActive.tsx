import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_TypeActive.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    createAccount?: ReactNode;
  };
}
/* @figmaId 1:13 */
export const Button_TypeActive: FC<Props> = memo(function Button_TypeActive(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.createAccount != null ? (
        props.text?.createAccount
      ) : (
        <div className={classes.createAccount}>Create Account</div>
      )}
    </button>
  );
});
