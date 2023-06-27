import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { IPhoneXHomeIndicator2 } from '../IPhoneXHomeIndicator2/IPhoneXHomeIndicator2';
import classes from './IPhoneXHomeIndicator.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    line?: string;
  };
}
/* @figmaId 1:145 */
export const IPhoneXHomeIndicator: FC<Props> = memo(function IPhoneXHomeIndicator(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <IPhoneXHomeIndicator2 classes={{ line: props.classes?.line || '' }} />
    </div>
  );
});
