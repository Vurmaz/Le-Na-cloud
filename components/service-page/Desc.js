
import DescReasons from './DescReasons'
import DescTitle from './DescTitle'

export default function Desc({ data, color }) {
        
  return (
    <div className=''>              
        <div>
            <DescTitle data={data} color={color} />
            <div 
                className='grid grid-cols-2 p-4 gap-2 md:gap-16 mx-auto py-8 sm:py-16 lg:py-32' 
            >
                {
                    data.reasons.map((reason, i) => {
                        return (
                            <DescReasons reason={reason} color={color} key={i}  />
                        )
                    })
                }
            </div>            
        </div>

    </div>
  )
}
