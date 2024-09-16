
import FaqImage from './FaqImage';
import FaqQuestion from './FaqQuestion';

export default function Faq({ data, color }) {
  return (
    <div className='flex h-max md:h-screen w-5/6 mx-auto'>
        <div className='grid grid-cols-3'>
            <FaqImage color={color} />
            <div className='flex flex-col items-center gap-8 w-full p-4 col-span-2'>
                <h1 style={{ color: `var(--${color})`}} className='text-2xl md:text-2xl lg:text-5xl p-4'>SSS</h1>
                {
                    data.map((item, i) => {
                            return(
                                <FaqQuestion key={i} item={item} i={i} color={color} />
                            )
                    })
                }              
            </div>
        </div>
        
      
    </div>
  )
}
