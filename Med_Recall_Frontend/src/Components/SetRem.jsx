import React, { useState } from 'react';
import '../assets/Styles/SetRem.css';
import MedName from './MedName';
import MedDate from './MedDate';
import MedTime from './MedTime';
import MedFreq from './MedFreq';
import MedCareTaker from './MedCareTaker';

function SetRem() {
    const [currentStep, setCurrentStep] = useState(0);
    const components = [MedName, MedDate, MedTime, MedFreq, MedCareTaker];

    const handleNextClick = () => {
        if (currentStep < components.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const CurrentComponent = components[currentStep];

    return (
        <div className="set-rem">
            <div className="set-rem-main">
                <CurrentComponent />
            </div>
            <div className="set-rem-info">
                <div className="rem-info-head">New Reminder</div>
                {currentStep < components.length - 1 && (
                    <div className="move-btn" onClick={handleNextClick}>
                        Next
                    </div>
                )}
            </div>
        </div>
    );
}

export default SetRem;
