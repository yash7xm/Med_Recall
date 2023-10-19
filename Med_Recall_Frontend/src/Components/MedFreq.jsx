import '../assets/Styles/MedFreq.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'



function MedFreq() {
    return (
        <div className='med-freq'>
            <div className="med-freq-icon">
                <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="med-freq-heading">How many times do you want to be remainded?</div>
            <div className="med-freq-input">
                <input type="number" />
            </div>
        </div>
    )
}

export default MedFreq