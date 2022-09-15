import * as React from 'react';
import { Link } from 'react-router-dom';
import "./css/header.css";
const Header = () => {    
    return(
        <header>
            <Link to={'/'} className='logo font-sebang-gothic font-bold'>Sinabro</Link>                    
            <ul>
                <li><Link to={'user/signin'} className='font-sebang-gothic font-bold'>Sign In</Link></li>
                <li><Link to={'user/signup'} className='font-sebang-gothic font-bold'>Sign Up</Link></li>
                <li><Link to={'/UserDashboard'} className='font-sebang-gothic font-bold'>TopBar</Link></li>
            </ul>
        </header>
    );
}

export default Header;