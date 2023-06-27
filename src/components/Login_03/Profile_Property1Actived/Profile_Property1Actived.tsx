import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Profile_Property1Linear } from '../Profile_Property1Linear/Profile_Property1Linear';
import classes from './Profile_Property1Actived.module.css';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
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
/* @figmaId 1:1039 */
export const Profile_Property1Actived: FC<Props> = memo(function Profile_Property1Actived(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon2} />
      </div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon3} />
      </div>
      <Profile_Property1Linear
        className={classes.profile}
        swap={{
          vuesaxLinearProfile: props.swap?.vuesaxLinearProfile || <VuesaxLinearProfileIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
