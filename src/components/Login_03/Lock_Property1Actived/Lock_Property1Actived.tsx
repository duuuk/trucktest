import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Lock_Property1Linear } from '../Lock_Property1Linear/Lock_Property1Linear';
import classes from './Lock_Property1Actived.module.css';
import { UnionIcon } from './UnionIcon';
import { VuesaxLinearLockIcon } from './VuesaxLinearLockIcon';

interface Props {
  className?: string;
  swap?: {
    vuesaxLinearLock?: ReactNode;
  };
}
/* @figmaId 1:1227 */
export const Lock_Property1Actived: FC<Props> = memo(function Lock_Property1Actived(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.union}>
        <UnionIcon className={classes.icon2} />
      </div>
      <Lock_Property1Linear
        className={classes.lock}
        swap={{
          vuesaxLinearLock: props.swap?.vuesaxLinearLock || <VuesaxLinearLockIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
