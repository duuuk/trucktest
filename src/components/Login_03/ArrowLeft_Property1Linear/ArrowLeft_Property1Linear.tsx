import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ArrowLeft_Property1Linear.module.css';
import { VuesaxLinearArrowLeftIcon } from './VuesaxLinearArrowLeftIcon';

interface Props {
  className?: string;
  classes?: {
    vuesaxLinearArrowLeft?: string;
    root?: string;
  };
  swap?: {
    vuesaxLinearArrowLeft?: ReactNode;
  };
}
/* @figmaId 1:150 */
export const ArrowLeft_Property1Linear: FC<Props> = memo(function ArrowLeft_Property1Linear(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.vuesaxLinearArrowLeft || ''} ${classes.vuesaxLinearArrowLeft}`}>
        {props.swap?.vuesaxLinearArrowLeft || <VuesaxLinearArrowLeftIcon className={classes.icon} />}
      </div>
    </div>
  );
});
