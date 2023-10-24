import '../assets/Styles/SetRem.css'
import MedName from './MedName'
import MedDate from './MedDate'
import MedTime from './MedTime'
import MedFreq from './MedFreq'
import MedCareTaker from './MedCareTaker'


function SetRem() {
    return(
        <div className="set-rem">
            <div className="set-rem-main">
              {/* <MedName /> */}
              {/* <MedDate /> */}
              {/* <MedTime /> */}
              {/* <MedFreq /> */}
              <MedCareTaker />
            </div>
            <div className="set-rem-info">
                <div className="rem-info-head">New Remainder</div>
                <div className="move-btn">Next</div>
            </div>
        </div>
    )
}

export default SetRem