import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrescriptionBottle } from '@fortawesome/free-solid-svg-icons'
import '../assets/Styles/MedName.css'


function MedName() {
    return(
       <div className='med-name'>
        <div className="icon">
            <FontAwesomeIcon icon={faPrescriptionBottle} />
        </div>
            <div className="heading">What med would you like to add?</div>
            <div className="med-name-input">
                <input type="text" placeholder='Search or type your medication name'/>
            </div>
       </div>
    )
}

export default MedName