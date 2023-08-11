import { headers } from 'next/headers'
import Button from '@/components/Button'

export default async function NotFound() {
  const headersList = headers()
  const domain = headersList.get('host')
  return (
    <div className="container flex flex-col lg-flex-row py-[100px] px-4 min-h-screen lg:px-40 justify-center items-center">
      <h1 className='text-center pb-4  text-7xl'>404</h1>
      <h1 className='text-center pb-4 text-xl '>Not Found at {domain}</h1>
      <span className='text-center pb-4 text-2xl font-sans'>You seemed to have lost your way</span>
      <Button href={"/"} variant="default"  >
        Take Me Home
      </Button>
    </div>
  )
}