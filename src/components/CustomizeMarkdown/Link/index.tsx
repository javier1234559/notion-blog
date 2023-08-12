import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode,
};

function Link({
  children
}: Props) {
  return (
    <a className='cursor-pointer text-[var(--select-color-0)] hover:text-[var(--select-color-1)] duration-500 transition-colors'>
      {children}
    </a>
  )
}

export default Link