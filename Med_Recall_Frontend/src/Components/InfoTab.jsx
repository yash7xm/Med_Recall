import '../assets/Styles/InfoTab.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faCapsules, faUser, faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons'


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
                <div className="desc1">
                    Elevate your well-being with Amrutam, where ancient Ayurvedic wisdom meets modern wellness. Experience <b>'health is beauty'</b> through our love-infused Ayurvedic recipes, promoting a healthier body and mind.                </div>
                <div className="desc2">
                    Amrutam: Where Ancient Wisdom Meets Modern Wellness for a Beautiful, Healthy You.
                </div>
            </div>

            <div className="info-tab-btm">

                <div className="btns">
                    <div className="set-rem-btn">Set Remainder</div>
                    <div className="caretaking-btn">Caretaking</div>
                    <div className="see-rem-btn">My Remainders</div>
                    <div className="profile-btn">Profile</div>
                    <div className="upcoming-btn">Upcoming</div>
                    <div className="my-products-btn">My Products</div>
                    <div className="explore-btn">Explore</div>
                </div>

                <div className="footer-menu">
                    <div className="about-btn">
                    <FontAwesomeIcon icon={faUser} />
                    <span>About</span></div>
                    <div className="contact-btn">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>Contact</span></div>
                    <div className="pdf-btn">
                    <FontAwesomeIcon icon={faFileLines} />
                    <span>PDF</span>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default InfoTab