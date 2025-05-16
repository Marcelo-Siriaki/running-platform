import './style.css'
import toggleRight from '../../assets/blue-toggle-button-right.svg'
import toggleLeft from '../../assets/blue-toggle-button-left.svg'
import { useState } from 'react'
import BackToMenuBtn from '../BackToMenuBtn'

function SpeedPaceConverter() {

  const [isSpeed, setIsSpeed] = useState(true);
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  function handleToggle() {
    setIsSpeed(!isSpeed);
    setInput('');
    setResult('');
  }

  function handleInputChange(e) {
    e.preventDefault();
    const inputValue = e.target.value;

    if (isSpeed) {
      if (/^\d*\.?\d*$/.test(inputValue)) {
        setInput(inputValue);
      }
    } else {
      if (/^\d{0,2}(:\d{0,2})?$/.test(inputValue)) {
        setInput(inputValue);
      }
    }

  }

  function convert() {

    if (!input) return;

    if (isSpeed) {
      const speed = parseFloat(input.trim());

      if (speed > 0) {
        const pace = 60 / speed;
        const minutes = Math.floor(pace);
        const seconds = Math.round((pace - minutes) * 60);
        setResult(`Your pace is ${minutes}:${seconds < 10 ? '0' : ''}${seconds} min/km`);
      }
    } else {
      if (input.includes(':')) {
        const time = (input.trim()).split(':');
        const minutes = parseFloat(time[0]) + (parseFloat(time[1]) / 60);
        const speed = (60 / minutes).toFixed(2);

        setResult(`Your speed is ${speed} km/h`);
      } else {
        const minutes = parseFloat(input.trim());
        const speed = (60 / minutes).toFixed(2);

        setResult(`Your speed is ${speed} km/h`);
      }
    }
  }

  return (
    <div className='container-speed-pace'>
      <h1 className='title-speed-pace'>Speed and Pace Converter</h1>
      <div className='calc-container'>

        <div className='toggle-select'>
          <p className='speed-pace-txt'>Speed (km/h)</p>
          <img className='toggle' src={isSpeed ? toggleLeft : toggleRight} alt='toggle' onClick={handleToggle} />
          <p className='speed-pace-txt'>Pace (min/km)</p>
        </div>


        <div className='write-your-speed'>
          <input
            type='text'
            value={input}
            onChange={handleInputChange}
            placeholder={isSpeed ? '10.5' : '6:10'}
          />
          <button className='btn-convert' onClick={convert}>Convert</button>
        </div>
        {result !== '' && (
          <div className='result'>
            {result}
          </div>
        )}
      </div>
      <BackToMenuBtn />
    </div>
  )
}

export default SpeedPaceConverter