import './style.css'
import useStore from '../../hooks/store';

export default function FormMethods({ method }) {

    const {
        speed,
        setSpeed,
        age,
        setAge,
        restHr,
        setRestHr,
        sex,
        setSex,
        pse,
        setPse,
        fcMax,
        setFcMax,
        hrReserve,
        setHrReserve,
    } = useStore();


    function handleSubmit(e) {
        e.preventDefault();

        const parsedAge = parseFloat(age);
        const parsedSpeed = parseFloat(speed);
        const parsedRestHr = parseFloat(restHr);

        if (method === 'vo2') {
            if (!speed) {
                console.log('Complete your speed at Vo2máx or Vo2pike');
                return;
            }
            if (parsedSpeed < 5) {
                console.log('Too slow. You need personal help');
                return;
            }

            console.log('Very good');
        }


        if (method === 'hr') {
            if (!age) {
                console.log('complete your age');
                return;
            }
            if (parsedAge > 99 || parsedAge < 16) {
                console.log('Your age is not compatible with this platform Sorry.');
                return;
            }
            if (!sex) {
                console.log('select your gender');
                return;
            }

            const fc = sex === 'male'
                ? 208 - (0.7 * parsedAge)
                : 206 - (0.88 * parsedAge);

            setFcMax(fc);
            console.log(fcMax);
            return;

        }
        if (method === 'rhr') {

            if (!age) {
                console.log('complete your age');
                return;
            }
            if (parsedAge > 99 || parsedAge < 16) {
                console.log('Your age is not compatible with this platform Sorry.');
                return;
            }

            if (!restHr || parsedRestHr > 70 || parsedRestHr < 30) {
                console.log('Complete your Rest Heart Rate or check it again');
                return;
            }

            if (!sex) {
                console.log('select your gender');
                return;
            }

            const heartRateReserve = sex === 'male'
                ? ((208 - (0.7 * parsedAge)) - parsedRestHr)
                : ((206 - (0.88 * parsedAge)) - parsedRestHr);

            setHrReserve(heartRateReserve);
            console.log(hrReserve);
            return;

        }
        if (method === 'pse') {

            if (!pse) {
                console.log('Select the scale you wnat to use');
                return;
            }

            console.log(`Ok, you selected the scale ${pse} for the PSE`);
            return;
        }

    }


    return (
        <form
            onSubmit={handleSubmit}
            className='form-container'
        >
            {method === 'vo2' ? (<div className='form'>
                <span className='your-data-txt'>Speed at Vo2máx or Vo2pike:</span>
                <input
                    className='form-input'
                    type='text'
                    name='speed'
                    placeholder='15.5'
                    value={speed}
                    inputMode='decimal'
                    onChange={(e) => {
                        const value = e.target.value;
                        if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
                            setSpeed(value);
                        }
                    }
                    }
                />
                <button
                    type='submit'
                    className='form-btn'
                >
                    GO!</button>

            </div>) : (method === 'hr' ? (<div className='form'>
                <span className='your-data-txt-hr'>Your age:</span>
                <input
                    className='form-input-hr'
                    type='text'
                    name='age'
                    placeholder='example: 42'
                    value={age}
                    inputMode='decimal'
                    onChange={(e) => {
                        const value = e.target.value;
                        if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
                            setAge(value);
                        }
                    }
                    } />
                <div className='sex-container'>
                    <label className='sex-label'>
                        <span className='sex-span'>Male</span>
                        <input
                            type='radio'
                            name='sex'
                            value='male'
                            checked={sex === 'male'}
                            onChange={(e) => { setSex(e.target.value) }
                            }
                        />
                    </label>
                    <label className='sex-label'>
                        <span className='sex-span'>Female</span>
                        <input
                            type='radio'
                            name='sex'
                            value='female'
                            checked={sex === 'female'}
                            onChange={(e) => { setSex(e.target.value) }
                            }
                        />
                    </label>
                </div>
                <button
                    type='submit'
                    className='form-btn'
                >
                    GO!</button>

            </div>) : (method === 'rhr' ? (<div className='form'>
                <span className='your-data-txt-hr'>Age, Rest HR and Sex</span>
                <input
                    className='form-input-hr'
                    type='text'
                    name='age'
                    placeholder='your age'
                    value={age}
                    inputMode='decimal'
                    onChange={(e) => {
                        const value = e.target.value;
                        if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
                            setAge(value);
                        }
                    }
                    }
                />
                <input
                    className='form-input-hr'
                    type='text'
                    name='rhr'
                    placeholder='rest hr'
                    value={restHr}
                    inputMode='decimal'
                    onChange={(e) => {
                        const value = e.target.value;
                        if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
                            setRestHr(value);
                        }
                    }
                    }
                />
                <div className='sex-container'>
                    <label className='sex-label'>
                        <span className='sex-span'>Male</span>
                        <input
                            type='radio'
                            name='sex'
                            value='male'
                            checked={sex === 'male'}
                            onChange={(e) => { setSex(e.target.value) }
                            }
                        />
                    </label>
                    <label className='sex-label'>
                        <span className='sex-span'>Female</span>
                        <input
                            type='radio'
                            name='sex'
                            value='female'
                            checked={sex === 'female'}
                            onChange={(e) => { setSex(e.target.value) }
                            }
                        />
                    </label>
                </div>
                <button
                    type='submit'
                    className='form-btn'
                >
                    GO!</button>

            </div>) : (<div className='form'>
                <span className='your-data-txt'>From 6-20 or 1-10</span>
                <div className='sex-container'>
                    <label className='sex-label'>
                        <span className='sex-span'>1-10</span>
                        <input
                            type='radio'
                            name='pse'
                            value='1-10'
                            checked={pse === '1-10'}
                            onChange={(e) => { setPse(e.target.value) }
                            }
                        />
                    </label>
                    <label className='sex-label'>
                        <span className='sex-span'>6-20</span>
                        <input
                            type='radio'
                            name='pse'
                            value='6-20'
                            checked={pse === '6-20'}
                            onChange={(e) => { setPse(e.target.value) }
                            }
                        />
                    </label>
                </div>
                <button
                    type='submit'
                    className='form-btn'
                >
                    GO!</button>
            </div>)))
            }
        </form>
    )
}