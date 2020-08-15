import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from './StateProvider'
import { auth } from './firebase'

function Header() {
    
    const [{ basket, user }, dispatch] = useStateValue();
    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav className="header">

            {/* logo on the left -> img */}
            <Link to="/">
                <img 
                    className="header__logo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt="amazon-icon"
                />
            </Link>
            {/* Search box */}
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon" />
            </div>
            
            {/* Three Links */}
            <div className="header__nav">

                {/* 1st link */}
                <Link to={!user && "/login"} className="header__link">
                    <div 
                    onClick={login}className="header__option">
                    <span className="header__optionLineOne">Hello, {user?.email}</span>
                    <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                {/* 2nd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* Basket icon with number */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">

                        {/* Shopping basket Icon */}
                            <ShoppingBasketIcon />

                        {/* Number of items in the Basket */}
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>

                    </div>

                </Link>
            </div>
        </nav>
    )
}

export default Header
