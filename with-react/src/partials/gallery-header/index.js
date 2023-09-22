import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faVideo, faTv } from "@fortawesome/free-solid-svg-icons";
function GalleryHeader() {
    return (
        <div className="header-gallery">
            <ul className="d-flex">
                <li><a href="#"><FontAwesomeIcon icon={faImages} /> FOTO GALERİ</a></li>
                <li><a href="#"><FontAwesomeIcon icon={faVideo} /> VİDEO GALERİ</a></li>
                <li><a href="#"><FontAwesomeIcon icon={faTv} /> CANLI YAYIN</a></li>
            </ul>
        </div>
    );
}

export default GalleryHeader;