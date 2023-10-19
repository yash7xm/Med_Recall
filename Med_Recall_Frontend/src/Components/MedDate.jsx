import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import '../assets/Styles/MedDate.css'


function MedDate() {
    return (
        <div className='med-date'>
            <div className="med-date-icon">
                <FontAwesomeIcon icon={faCalendar} />
            </div>
            <div className="med-date-heading">When do you want to take your med?</div>
            <div className="med-date-input">
                <input type="date" />
            </div>
        </div>
    )
}

export default MedDate