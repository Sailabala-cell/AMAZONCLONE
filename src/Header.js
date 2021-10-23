import React from 'react'
import "./Header.css"
import {Link,useHistory} from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from "./StateProvider"
import { auth } from './firebase'
function Header() {
    const[{basket,user}]=useStateValue();
    console.log(basket);
    
    
    const login = () => {
        if (user) {
            auth.signOut();
           
        }
    }
    
    
    return (
        <nav className="header">
         <Link to = "/">
         <img
         className="header__logo"
         src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white.png"
         alt="amazon"
         />   
         </Link>
         <div className="header__search">       
         <input type="text" className="header__searchInput"/>
         <SearchIcon className="header__searchIcon"/>
         </div>

         {/* 3 Links */}
         <div className="header__Nav">
             {/* 1st link */}
             <Link to ={!user && "/login"} className="header__link">
                  <div onClick={login} className="header__option">
                      <span className="header__optionlineOne">Hello {user?.email}</span>
                      <span className="header__optionlineTwo">{user ? "Sign Out" : "Sign In"}</span>
                  </div>
             </Link>
            
            {/* 2nd link */}
            <Link to = "/" className="header__link">
                  <div className="header__option">
                      <span className="header__optionlineOne">Return</span>
                      <span className="header__optionlineTwo">& Orders</span>
                  </div>
             </Link>

             {/* 3rd link */}
             <Link to = "/" className="header__link">
                  <div className="header__option">
                      <span className="header__optionlineOne">Your</span>
                      <span className="header__optionlineTwo">Prime</span>
                  </div>
             </Link>

             {/* 4th link */}
             <Link to = "/checkout" className="header__link">
                 <div className="header__optionBasket">
                     <ShoppingBasketIcon/>
                     <span className="header__optionlineTwo header__basketCount">{basket?.length}</span>
                 </div>
             </Link>
            </div> 
        </nav>
    )
}

export default Header

