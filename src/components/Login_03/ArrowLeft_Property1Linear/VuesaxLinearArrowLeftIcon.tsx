import { memo, SVGProps } from 'react';

const VuesaxLinearArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.57 5.93L3.5 12L9.57 18.07'
      stroke='#151B33'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M20.5 12H3.67'
      stroke='#151B33'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VuesaxLinearArrowLeftIcon);
export { Memo as VuesaxLinearArrowLeftIcon };
