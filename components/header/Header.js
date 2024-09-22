import SmallScreenSizeHeader from './SmallScreenSizeHeader'
import ScreenSizeHeader from './ScreenSizeHeader'
import { getLogos } from '@/libs/utils'

export default async function Header() {

  const { data } = await getLogos()

  return (
        <div 
          className='z-50 h-24 bg-text top-0 left-0 bg-white w-full sticky text-sm text-main my-auto shadow-sm'
        >           
          <ScreenSizeHeader data={data}  />
          <SmallScreenSizeHeader data={data}  />
        </div>
  )
}
