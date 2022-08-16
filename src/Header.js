import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
function Header() {
    const[{basket}]=useStateValue();
    const[{user}]=useStateValue();


    const login=()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img  className='header__logo' src="" alt="am-lg"/>
            </Link>
            <div className="header__search">
            <input className="header__searchInput" />
           <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link  to={!user && "/login"} className="header__link">
                <div onClick={login} className="header__option">
                <span className="header__optionLineone">Hello {user?.displayName}</span>
                <span className="header__optionLinetWo">{user? "Sign Out ":"Sign In"}</span>
                </div>
             
                </Link>
                <Link to="/" className="header__link">
                <div className="header__option">
                <span  className="header__optionLineone" >Returns</span>
                <span className="header__optionLinetWo">orders</span>
                </div>
             
                </Link>
                <Link to="/" className="header__link">
                <div className="header__option">
                <span className="header__optionLineone" >Your</span>
                <span className="header__optionLinetWo">prime</span>
                </div>
             
                </Link>
                <Link to="/checkout">
                <div className="header__optionBasket">
                <ShoppingBasketIcon/>
                 <span className="header__optiontWo basketcount">{basket?.length}</span>
                </div>
                </Link>




            </div>
      
            
        </div>
    )
}

export default Header
