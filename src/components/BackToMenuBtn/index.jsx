import './style.css'
import useStore from '../../hooks/store';

function BackToMenuBtn() {


    const { resetFormAndMethods } = useStore();

    const callBackToMenu = () => {
        resetFormAndMethods();
    }

    return (
        <button className='back-to-menu-btn' onClick={callBackToMenu}>
            Back to Menu
        </button>
    )
}

export default BackToMenuBtn