import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Call_Property1Linear } from '../Call_Property1Linear/Call_Property1Linear';
import classes from './Call_Property1Actived.module.css';
import { VectorIcon } from './VectorIcon';
import { VuesaxLinearCallIcon } from './VuesaxLinearCallIcon';

interface Props {
  className?: string;
  swap?: {
    call?: ReactNode;
  };
  hide?: {
    vector?: boolean;
  };
}
/* @figmaId 1:1122 */
export const Call_Property1Actived: FC<Props> = memo(function Call_Property1Actived(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {!props.hide?.vector && (
        <div className={classes.vector}>
          <VectorIcon className={classes.icon2} />
        </div>
      )}
      {props.swap?.call || (
        <Call_Property1Linear
          className={classes.call}
          swap={{
            vuesaxLinearCall: <VuesaxLinearCallIcon className={classes.icon} />,
          }}
        />
      )}
    </div>
  );
});
