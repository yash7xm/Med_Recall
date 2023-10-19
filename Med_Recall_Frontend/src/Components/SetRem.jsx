import '../assets/Styles/SetRem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrescriptionBottle } from '@fortawesome/free-solid-svg-icons'


function SetRem() {
    return(
        <div className="set-rem">
            <div className="set-rem-main">
               <div className="med-head">
               <FontAwesomeIcon icon={faPrescriptionBottle} />              
                </div>
               <div className="med-desc">
                What med would you like to add?
               </div>
               <div className="med-input">
                <input type="text" placeholder='Enter or search medicine name'/>
               </div>
            </div>
            <div className="set-rem-info">
                <div className="rem-info-head">New Remainder</div>
                <div className="move-btn">Next</div>
            </div>
        </div>
    )
}

export default SetRem