import './style.css'
import Header from '../../components/Header'
import SpeedPaceConverter from '../../components/SpeedPaceConverter'
import Modality from '../../components/Modality'
import useStore from '../../hooks/store'

function Home() {
  const { modality, setModality } = useStore();

  return (

    <div className='container'>
      <Header />
      <>
        {modality === '' &&
          <section className='menu-container'>
            <button className='methods-btns' onClick={(e) => setModality(e.target.name)} name='Speed and Pace Converter'>Speed and Pace Converter</button>
            <button className='methods-btns' onClick={(e) => setModality(e.target.name)} name='Long High Intensity Interval Training'>L-HIIT - Long High Intensity Interval Training</button>
            <button className='methods-btns' onClick={(e) => setModality(e.target.name)} name='Short High Intensity Interval Training'>S-HIIT - Short High Intensity Interval Training</button>
            <button className='methods-btns' onClick={(e) => setModality(e.target.name)} name='Sprint Interval Training'>SIT - Sprint Interval Training</button>
          </section>
        }
      </>

      <>
        {modality !== '' && (modality === 'Speed and Pace Converter' ? <SpeedPaceConverter /> : <Modality />)}
      </>


    </div>
  )
}

export default Home