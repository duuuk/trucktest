import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './IPhoneXHomeIndicator2.module.css';

interface Props {
  className?: string;
  classes?: {
    line?: string;
  };
}
/* @figmaId 1:147 */
export const IPhoneXHomeIndicator2: FC<Props> = memo(function IPhoneXHomeIndicator2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={`${props.classes?.line || ''} ${classes.line}`}></div>
    </div>
  );
});
