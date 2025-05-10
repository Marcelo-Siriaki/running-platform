import './style.css'
import Header from '../../components/Header'
import SpeedPaceConverter from '../../components/SpeedPaceConverter'
import LongHiit from '../../components/LongHiit'
import ShortHiit from '../../components/ShortHiit'
import Sit from '../../components/Sit'
import useStore from '../../hooks/store'

function Home() {
  const { menuOption, setMenuOption } = useStore();
  const componentsMap = {
    SpeedPaceConverter: SpeedPaceConverter,
    LongHiit: LongHiit,
    ShortHiit: ShortHiit,
    Sit: Sit,
  };

  const SelectedComponent = componentsMap[menuOption];

  const callMethod = (e) => {

    setMenuOption(e.target.name);
  }


  return (

    <div className='container'>
      <Header />
      <>
        {menuOption === '' &&
          <section className='menu-container'>
            <button className='methods-btns' onClick={callMethod} name='SpeedPaceConverter'>Speed and Pace Converter</button>
            <button className='methods-btns' onClick={callMethod} name='LongHiit'>L-HIIT - Long High Intensity Interval Training</button>
            <button className='methods-btns' onClick={callMethod} name='ShortHiit'>S-HIIT - Short High Intensity Interval Training</button>
            <button className='methods-btns' onClick={callMethod} name='Sit'>SIT - Sprint Interval Training</button>
          </section>
        }
      </>

      <>
        {menuOption !== '' && <SelectedComponent />}
      </>


    </div>
  )
}

export default Home