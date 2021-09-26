import React from 'react';

import './header.styles.scss'

import { auth } from '../../firebase/firebase.utils'

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/bethehero.svg'

const Header = ({ currentUser }) => {
    return (
        <div className="header">
        <Link to='/' className="logo-container"> 
            <Logo id="bethehero" />
        </Link>            
        <div className="options">
        <Link className="option" to="/shop">
            SHOP
        </Link>
        <Link className="option" to="">
            CONTACT
        </Link>
        {currentUser?
        <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
        :
        <Link className="option" to="/signin">SIGN IN</Link>}
        </div>
        </div>
    )
}

export default Header;