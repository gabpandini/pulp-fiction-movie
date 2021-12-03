import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import github from '../images/github.svg'


function Footer() {
    return(
        <footer className='footer' > 
            <a href="https://github.com/gabpandini"><img className='icons' src={github} alt="Github Icon" /></a>
        </footer>
    )
}

export default Footer