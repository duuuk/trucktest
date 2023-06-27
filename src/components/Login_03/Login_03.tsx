import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AppBar_Property1TopBarProperty } from './AppBar_Property1TopBarProperty/AppBar_Property1TopBarProperty';
import { ArrowLeft_Property1Linear } from './ArrowLeft_Property1Linear/ArrowLeft_Property1Linear';
import { Button_TypeActive } from './Button_TypeActive/Button_TypeActive';
import { Call_Property1Actived } from './Call_Property1Actived/Call_Property1Actived';
import { ContainerIcon } from './ContainerIcon';
import { Group38Icon } from './Group38Icon';
import { InputField_Property1InputField } from './InputField_Property1InputField/InputField_Property1InputField';
import { IPhoneXBarsStatusDefault } from './IPhoneXBarsStatusDefault/IPhoneXBarsStatusDefault';
import { Lock_Property1Actived } from './Lock_Property1Actived/Lock_Property1Actived';
import classes from './Login_03.module.css';
import { Profile_Property1Actived } from './Profile_Property1Actived/Profile_Property1Actived';
import { TickCircle_Property1Bold } from './TickCircle_Property1Bold/TickCircle_Property1Bold';
import { VuesaxBoldTickCircleIcon } from './VuesaxBoldTickCircleIcon';
import { VuesaxBoldTickCircleIcon2 } from './VuesaxBoldTickCircleIcon2';
import { VuesaxLinearArrowLeftIcon } from './VuesaxLinearArrowLeftIcon';
import { VuesaxLinearLockIcon } from './VuesaxLinearLockIcon';
import { VuesaxLinearProfileIcon } from './VuesaxLinearProfileIcon';

interface Props {
  className?: string;
  hide?: {
    vector?: boolean;
    tickCircle?: boolean;
    helperText?: boolean;
    tickCircle2?: boolean;
    helperText2?: boolean;
  };
}
/* @figmaId 15:1390 */
export const Login_03: FC<Props> = memo(function Login_03(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame51057}>
        <div className={classes.frame}></div>
        <ArrowLeft_Property1Linear
          className={classes.arrowLeft}
          classes={{ vuesaxLinearArrowLeft: classes.vuesaxLinearArrowLeft }}
          swap={{
            vuesaxLinearArrowLeft: (
              <div className={classes.vuesaxLinearArrowLeft}>
                <VuesaxLinearArrowLeftIcon className={classes.icon} />
              </div>
            ),
          }}
        />
      </div>
      <div className={classes.updateTrackEasily}>Update &amp; Track Easily</div>
      <div className={classes.getGreatExperienceWithTruckTra}>Get great experience with TruckTrack</div>
      <Button_TypeActive
        className={classes.button}
        text={{
          createAccount: <div className={classes.createAccount}>Sign In</div>,
        }}
      />
      <div className={classes.inputField}>
        <InputField_Property1InputField
          classes={{ rectangle33: classes.rectangle33 }}
          swap={{
            profile: (
              <Call_Property1Actived
                swap={{
                  call: (
                    <Profile_Property1Actived
                      className={classes.profile}
                      swap={{
                        vuesaxLinearProfile: <VuesaxLinearProfileIcon className={classes.icon2} />,
                      }}
                    />
                  ),
                }}
                hide={{
                  vector: true,
                }}
              />
            ),
            eye: (
              <TickCircle_Property1Bold
                swap={{
                  vuesaxBoldTickCircle: <VuesaxBoldTickCircleIcon className={classes.icon3} />,
                }}
              />
            ),
          }}
          hide={{
            eye: false,
            helperText: true,
          }}
          text={{
            placeholder: <div className={classes.placeholder}>Email</div>,
            placeholder2: <div className={classes.placeholder2}>dulguun@gmail.com</div>,
          }}
        />
        <InputField_Property1InputField
          classes={{ rectangle33: classes.rectangle332 }}
          swap={{
            profile: (
              <Lock_Property1Actived
                swap={{
                  vuesaxLinearLock: <VuesaxLinearLockIcon className={classes.icon4} />,
                }}
              />
            ),
            eye: (
              <TickCircle_Property1Bold
                swap={{
                  vuesaxBoldTickCircle: <VuesaxBoldTickCircleIcon2 className={classes.icon5} />,
                }}
              />
            ),
          }}
          hide={{
            eye: false,
            helperText: true,
          }}
          text={{
            placeholder: <div className={classes.placeholder3}>Password</div>,
            placeholder2: <div className={classes.placeholder4}>••••••••••</div>,
          }}
        />
      </div>
      <AppBar_Property1TopBarProperty className={classes.appBar} classes={{ line: classes.line }} />
      <div className={classes.group38}>
        <Group38Icon className={classes.icon7} />
      </div>
      <div className={classes.forgotPassword}>Forgot Password</div>
      <Button_TypeActive
        className={classes.button2}
        text={{
          createAccount: <div className={classes.createAccount2}>Sign Up</div>,
        }}
      />
      <IPhoneXBarsStatusDefault
        className={classes.IPhoneXBarsStatusDefault}
        classes={{ container: classes.container }}
        swap={{
          container: (
            <div className={classes.container}>
              <ContainerIcon className={classes.icon6} />
            </div>
          ),
        }}
        text={{
          Time: <div className={classes.Time}>9:41</div>,
        }}
      />
      <AppBar_Property1TopBarProperty className={classes.appBar2} />
    </div>
  );
});
