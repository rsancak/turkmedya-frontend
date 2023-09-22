import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function SearchHeader() {
    return (
        <div className="header-search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
    );
}

export default SearchHeader;