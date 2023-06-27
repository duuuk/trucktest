import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Lock_Property1Linear.module.css';
import { VuesaxLinearLockIcon } from './VuesaxLinearLockIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vuesaxLinearLock?: ReactNode;
  };
}
/* @figmaId 1:1163 */
export const Lock_Property1Linear: FC<Props> = memo(function Lock_Property1Linear(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxLinearLock}>
        {props.swap?.vuesaxLinearLock || <VuesaxLinearLockIcon className={classes.icon} />}
      </div>
    </div>
  );
});
