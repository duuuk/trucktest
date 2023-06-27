import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Eye_Property1Linear } from '../Eye_Property1Linear/Eye_Property1Linear';
import { Profile_Property1Actived } from '../Profile_Property1Actived/Profile_Property1Actived';
import classes from './InputField_Property1InputField.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle33?: string;
  };
  swap?: {
    profile?: ReactNode;
    eye?: ReactNode;
  };
  hide?: {
    eye?: boolean;
    helperText?: boolean;
  };
  text?: {
    placeholder?: ReactNode;
    placeholder2?: ReactNode;
  };
}
/* @figmaId 1:1093 */
export const InputField_Property1InputField: FC<Props> = memo(function InputField_Property1InputField(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.body}>
        {props.text?.placeholder != null ? (
          props.text?.placeholder
        ) : (
          <div className={classes.placeholder}>Placeholder</div>
        )}
        <div className={classes.form}>
          <div className={`${props.classes?.rectangle33 || ''} ${classes.rectangle33}`}></div>
          <div className={classes.textArea}>
            <div className={classes.frame51080}>
              {props.swap?.profile || <Profile_Property1Actived />}
              {props.text?.placeholder2 != null ? (
                props.text?.placeholder2
              ) : (
                <div className={classes.placeholder2}>Placeholder</div>
              )}
            </div>
            {props.hide?.eye === false && (props.swap?.eye || <Eye_Property1Linear />)}
          </div>
        </div>
      </div>
      {!props.hide?.helperText && <div className={classes.helperText}>Helper Text</div>}
    </div>
  );
});
