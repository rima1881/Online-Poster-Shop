import { faHome ,faCalendarTimes , faDollarSign ,faCircleInfo ,faCircleUser , faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function UserNavbar(){

    return(
        <>
            <li>
                <a href='/'>
                    <FontAwesomeIcon icon={faHome} />
                    Account
                </a>
            </li>
            <li>
                <a href='/comingsoon'>
                    <FontAwesomeIcon icon={faCalendarTimes} />
                    Logout
                </a>
            </li>
        </>
    )
}