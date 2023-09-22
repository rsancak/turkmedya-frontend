import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import './style.scss';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href="#">SON DAKİKA</a></li>
                <li><a href="#">GÜNCEL</a></li>
                <li><a href="#">DÜNYA</a></li>
                <li><a href="#">EKONOMİ</a></li>
                <li><a href="#">SPOR</a></li>
                <li><a href="#">YAŞAM</a></li>
                <li><a href="#">BİLİM-TEKNOLOJİ</a></li>
                <li><a href="#">AÇIK GÖRÜŞ</a></li>
                <li><a href="#">YAZARLAR</a></li>
                <li><a href="#">SEYAHAT</a></li>
                <li><FontAwesomeIcon icon={faBars} /></li>
            </ul>
        </nav>
    );
}

export default Navbar;