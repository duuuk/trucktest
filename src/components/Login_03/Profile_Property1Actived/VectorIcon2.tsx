import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.15957 8.87C5.05957 8.86 4.93957 8.86 4.82957 8.87C2.44957 8.79 0.55957 6.84 0.55957 4.44C0.55957 1.99 2.53957 0 4.99957 0C7.44957 0 9.43957 1.99 9.43957 4.44C9.42957 6.84 7.53957 8.79 5.15957 8.87Z'
      fill='#FD683D'
    />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
