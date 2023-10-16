import '../assets/Styles/InfoTab.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faCapsules } from '@fortawesome/free-solid-svg-icons'


function InfoTab() {
    return (
        <div className="info-tab">
            <div className="menu">
                <div className="logo-btn">
                    <div>medrecall.org</div>
                </div>
                <div className="menu-btn">
                <FontAwesomeIcon icon={faLayerGroup} />  
                <span>Menu</span></div>
                <div className="products-btn">
                <FontAwesomeIcon icon={faCapsules} />
                    <span>Products</span></div>
            </div>

            <div className="desc">
                <div className="heading">Amrutam</div>
                <div className="heading-info">Ayurveda + Wellness + Lifestyle</div>
            </div>
        </div>
    )
}

export default InfoTab