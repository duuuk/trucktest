import { memo, SVGProps } from 'react';

const VuesaxLinearArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.7725 5.43583L3.20833 11L8.7725 16.5642'
      stroke='#17171C'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18.7917 11H3.36417'
      stroke='#17171C'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VuesaxLinearArrowLeftIcon);
export { Memo as VuesaxLinearArrowLeftIcon };
