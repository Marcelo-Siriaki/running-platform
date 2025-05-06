import './style.css'
import Header from '../../components/Header'
import SpeedPaceConverter from '../../components/SpeedPaceConverter'
import MethodsTable from '../../components/MethodsTable'
import LongHiit from '../../components/LongHiit'
import ShortHiit from '../../components/ShortHiit'
import Sit from '../../components/Sit'
import { useState } from 'react'

function Home() {
  const [method, setMethod] = useState('');
  const componentsMap = {
    SpeedPaceConverter: SpeedPaceConverter,
    LongHiit: LongHiit,
    ShortHiit: ShortHiit,
    Sit: Sit,
  };

  const SelectedComponent = componentsMap[method];

  const callMethod = (e) => {

    setMethod(e.target.name);
  }

  const callBackToMenu = () => {
    setMethod('');

  }

  return (

    <div className='container'>
      <Header />
      <>
        {method === '' &&
          <section className='menu-container'>
            <button className='methods-btns' onClick={callMethod} name='SpeedPaceConverter'>Speed and Pace Converter</button>
            <button className='methods-btns' onClick={callMethod} name='LongHiit'>L-HIIT - Long High Intensity Interval Training</button>
            <button className='methods-btns' onClick={callMethod} name='ShortHiit'>S-HIIT - Short High Intensity Interval Training</button>
            <button className='methods-btns' onClick={callMethod} name='Sit'>SIT - Sprint Interval Training</button>
          </section>
        }
      </>

      <>
        {method !== '' && <SelectedComponent />}
        {method !== '' && <button className='back-to-menu-btn' onClick={callBackToMenu}>Back to Menu</button>}
      </>


    </div>
  )
}

export default Home