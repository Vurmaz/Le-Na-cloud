
import Reasons from './Reasons'
import DescText from './DescText'


export default function Desc({ data, color }) {

  return (
    <div className=''>
        <DescText data={data} />
        <div 
            className='grid grid-cols-2 p-4 gap-4 mx-auto py-8 sm:py-16 lg:py-32' 
        >
            {
                data.reasons.map((reason, i) => {
                    return (
                        <Reasons reason={reason} color={color} key={i}  />
                    )
                })
            }
        </div>
    </div>
  )
}
