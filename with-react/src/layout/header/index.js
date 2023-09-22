import logo from '../../assets/img/logo.png';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Navbar from '../../partials/navbar'
import ExchangeHeader from '../../partials/exchange-header';
import GalleryHeader from '../../partials/gallery-header';
import SocialHeader from '../../partials/social-header';
import SearchHeader from '../../partials/search-header';
import BreakingNewsHeader from '../../partials/breaking-news-header';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-top d-flex">
                    <div className="ht-left">
                        <p>İSTANBUL <b>15°C / 7°C</b></p>
                        <span>Parçalı Bulutlu, Güneşli</span>
                    </div>
                    <div className="ht-center">
                        <a href="#">
                            <img src={logo} alt="Star Logo" />
                        </a>
                        <p>22 Eylül 2023 Cuma / 8 RebiülEvvel 1445</p>
                    </div>
                    <div className="ht-right">
                        <button> <FontAwesomeIcon icon={faMoon} /> Gece Modu </button>
                        <p>İSTANBUL <b>03:09:54</b></p>
                        <span>İmsak kalan süre</span>
                    </div>
                </div>
                <Navbar />
            </div>
            <div class="header-bottom">
                <div class="container d-flex justify-content-between">
                    <ExchangeHeader />
                    <GalleryHeader />
                    <SocialHeader />
                    <SearchHeader />
                </div>
            </div>
            <BreakingNewsHeader />
        </header>
    );
}

export default Header;