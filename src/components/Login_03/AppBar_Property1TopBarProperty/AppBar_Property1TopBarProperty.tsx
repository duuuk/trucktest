import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { IPhoneXHomeIndicator } from '../IPhoneXHomeIndicator/IPhoneXHomeIndicator';
import classes from './AppBar_Property1TopBarProperty.module.css';

interface Props {
  className?: string;
  classes?: {
    line?: string;
    root?: string;
  };
}
/* @figmaId 1:69 */
export const AppBar_Property1TopBarProperty: FC<Props> = memo(function AppBar_Property1TopBarProperty(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <IPhoneXHomeIndicator className={classes.bottomBar} classes={{ line: props.classes?.line || '' }} />
    </div>
  );
});
