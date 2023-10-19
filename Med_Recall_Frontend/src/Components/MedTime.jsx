import '../assets/Styles/MedTime.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'



function MedTime() {
    return (
        <div className='med-time'>
            <div className="med-time-icon">
                <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="med-time-heading">At what time do you want to be remainded?</div>
            <div className="med-time-input">
                <input type="time" />
            </div>
        </div>
    )
}

export default MedTime