import './style.css'
import { useState } from 'react';

export default function FormMethods({ method }) {

    const [speed, setSpeed] = useState('');
    const [age, setAge] = useState('');
    const [restHr, setRestHr] = useState('');
    const [sex, setSex] = useState('');
    const [pse, setPse] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
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
                            checked={sex === '1-10'}
                            onChange={(e) => { setSex(e.target.value) }
                            }
                        />
                    </label>
                    <label className='sex-label'>
                        <span className='sex-span'>6-20</span>
                        <input
                            type='radio'
                            name='pse'
                            value='6-20'
                            checked={sex === '6-20'}
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
            </div>)))
            }
        </form>
    )
}