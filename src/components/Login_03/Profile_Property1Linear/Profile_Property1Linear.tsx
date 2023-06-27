import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Profile_Property1Linear.module.css';
import { VuesaxLinearProfileIcon } from './VuesaxLinearProfileIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vuesaxLinearProfile?: ReactNode;
  };
}
/* @figmaId 1:996 */
export const Profile_Property1Linear: FC<Props> = memo(function Profile_Property1Linear(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxLinearProfile}>
        {props.swap?.vuesaxLinearProfile || <VuesaxLinearProfileIcon className={classes.icon} />}
      </div>
    </div>
  );
});
