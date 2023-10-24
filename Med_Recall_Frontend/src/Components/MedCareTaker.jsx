import '../assets/Styles/MedCareTaker.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrescriptionBottle } from '@fortawesome/free-solid-svg-icons'



function MedCareTaker() {
    return (
        <div className='med-care'>
            <div className="med-care-icon">
                <FontAwesomeIcon icon={faPrescriptionBottle} />
            </div>
            <div className="med-care-heading">Enter your caretaker's email (opitonal) </div>
            <div className="med-care-input">
                <input type="email" />
            </div>
        </div>
    )
}

export default MedCareTaker