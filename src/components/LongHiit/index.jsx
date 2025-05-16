import './style.css'
import FormMethods from '../FormMethods'
import useStore from '../../hooks/store'
import BackToMenuBtn from '../BackToMenuBtn'

function LongHiit() {

    const {
        selectedMethod,
        setSelectedMethod,
    } = useStore();


    return (
        <div className='container-l-hiit'>
            <h1 className='title-l-hiit'>Long High Intensity Interval Training</h1>
            <div className='select-method-container '>

                <div className='select-method-title-container'>
                    <label className='select-method-txt'> Select the Method:
                        <select name='selectedMethod' onChange={e => setSelectedMethod(e.target.value)}>
                            <option value='vo2'>Speed of VO2máx or VO2pike</option>
                            <option value='hr'>Maximum Heart Rate</option>
                            <option value='rhr'>Reserve Heart Rate</option>
                            <option value='pse'>Perceived Subjective Exertion</option>
                        </select>
                    </label>
                </div>
                {selectedMethod !== '' && <FormMethods method={selectedMethod} />}

            </div>
            <BackToMenuBtn />
        </div>
    )
}

export default LongHiit