import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Call_Property1Linear.module.css';
import { VuesaxLinearCallIcon } from './VuesaxLinearCallIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vuesaxLinearCall?: ReactNode;
  };
}
/* @figmaId 1:749 */
export const Call_Property1Linear: FC<Props> = memo(function Call_Property1Linear(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxLinearCall}>
        {props.swap?.vuesaxLinearCall || <VuesaxLinearCallIcon className={classes.icon} />}
      </div>
    </div>
  );
});
