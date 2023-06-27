import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Eye_Property1Linear.module.css';
import { VuesaxLinearEyeIcon } from './VuesaxLinearEyeIcon';

interface Props {
  className?: string;
}
/* @figmaId 1:1044 */
export const Eye_Property1Linear: FC<Props> = memo(function Eye_Property1Linear(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.vuesaxLinearEye}>
        <VuesaxLinearEyeIcon className={classes.icon} />
      </div>
    </div>
  );
});
