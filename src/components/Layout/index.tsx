import{ ReactNode } from 'react'

type Props = {
    children: ReactNode ,
}

function Layout({
    children
}: Props) {
  return (
    <div className='flex w-full flex-col min-h-screen'>{children}</div>
  )
}

export default Layout