import './style.css'
import Sonic from '../../assets/sonic.svg'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {

    const location = useLocation();

    return (
        <header className='header-container'>
            <div className='logo-txt-container'>
                <img className='sonic' src={Sonic} alt='sonic' />
                <h1 className='txt-logo'>Running Platform</h1>
            </div>
            <div className='logo-txt-container'>
                <Link to='/' className={location.pathname === '/' ? 'txt-logo-active' : 'txt-logo'}>Home</Link>
                <Link to='/about' className={location.pathname === '/about' ? 'txt-logo-active' : 'txt-logo'}>About Me</Link>
                <Link to='/contact' className={location.pathname === '/contact' ? 'txt-logo-active' : 'txt-logo'}>Contact</Link>
            </div >
        </header >

    )
}