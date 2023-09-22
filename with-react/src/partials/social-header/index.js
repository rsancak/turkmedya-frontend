import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram, faYoutube, faThreads } from "@fortawesome/free-brands-svg-icons";
function SocialHeader() {
    return (
        <div className="header-social">
            <ul className="d-flex">
                <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faXTwitter} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faThreads} /></a></li>
            </ul>
        </div>
    );
}

export default SocialHeader;