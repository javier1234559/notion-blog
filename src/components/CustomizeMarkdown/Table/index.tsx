import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode,
}

const Table = ({
  children
}: Props) => {
  return (
    <div className='inline-block rounded-xl overflow-hidden w-full border border-teal-50 dark:border-slate-950'>
      <table className="table-custom">
        {children}
      </table>
    </div>
  )
}

export default Table