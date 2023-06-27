import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ContainerIcon } from './ContainerIcon';
import classes from './IPhoneXBarsStatusDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    container?: string;
    root?: string;
  };
  swap?: {
    container?: ReactNode;
  };
  text?: {
    Time?: ReactNode;
  };
}
/* @figmaId 1:125 */
export const IPhoneXBarsStatusDefault: FC<Props> = memo(function IPhoneXBarsStatusDefault(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.Time != null ? props.text?.Time : <div className={classes.Time}>9:41</div>}
      <div className={`${props.classes?.container || ''} ${classes.container}`}>
        {props.swap?.container || <ContainerIcon className={classes.icon} />}
      </div>
    </div>
  );
});
