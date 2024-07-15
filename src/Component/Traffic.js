import './Traffic.css'
import { useState } from 'react'


function Lightcolors() {

    
    const [color, setlight] = useState(false);

    
    return <>

        <div className='container-body '>
            
            <div className='container-colors'>


                <div className={`redColor rounded-circle w-50 h-25 ${color === 'red' ? "shine-red" : "" }` } onClick={() => setlight('red')}></div>
                <div className={`orangeColor rounded-circle w-50 h-25  ${color === 'yellow' ? "shine-yellow" : "" }` } onClick={() => setlight('yellow')}></div>
                <div className={`greenColor rounded-circle w-50 h-25  ${color === 'green' ? "shine-green" : "" }` } onClick={() => setlight('green')}></div>
           
            </div>
            

        </div>

    </>
}

export default Lightcolors;
