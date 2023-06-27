import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.15973 1.56C-0.260273 3.18 -0.260273 5.82 2.15973 7.43C4.90973 9.27 9.41973 9.27 12.1697 7.43C14.5897 5.81 14.5897 3.17 12.1697 1.56C9.42973 -0.27 4.91973 -0.27 2.15973 1.56Z'
      fill='#FD683D'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
