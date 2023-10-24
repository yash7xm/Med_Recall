import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import '../assets/Styles/FinalMessage.css'


function FinalMessage() {
    return(
       <div className='med-final'>
        <div className="med-final-icon">
        <FontAwesomeIcon icon={faCalendarCheck} />
        </div>
            <div className="med-final-heading">Congrats your reaminder is all set!</div>
       </div>
    )
}

export default FinalMessage