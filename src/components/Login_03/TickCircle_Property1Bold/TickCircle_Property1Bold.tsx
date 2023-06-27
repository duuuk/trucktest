import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './TickCircle_Property1Bold.module.css';
import { VuesaxBoldTickCircleIcon } from './VuesaxBoldTickCircleIcon';

interface Props {
  className?: string;
  swap?: {
    vuesaxBoldTickCircle?: ReactNode;
  };
}
/* @figmaId 1:1132 */
export const TickCircle_Property1Bold: FC<Props> = memo(function TickCircle_Property1Bold(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.vuesaxBoldTickCircle}>
        {props.swap?.vuesaxBoldTickCircle || <VuesaxBoldTickCircleIcon className={classes.icon} />}
      </div>
    </div>
  );
});
