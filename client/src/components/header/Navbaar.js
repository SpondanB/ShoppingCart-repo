import React from 'react'
import "./Navbaar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';

const Navbaar = () => {
    return (
        <header>
            <nav>
                <div className='left'>
                    <div className='navlogo'>
                        <NavLink to="/"><h1><b><u>Shoppers</u></b></h1></NavLink>
                    </div>
                    <div className='nav_searchbaar'>
                        <input type='text' name='' id=''></input>
                        <div className='search_icon'>
                            <SearchIcon id='search' />
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='cart_btn'>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon id='icon'/>
                        </Badge>
                    </div>
                    <div className='nav_btn'>
                        <NavLink to='login'>Sign In</NavLink>
                    </div>
                    <Avatar className='avtar' />
                </div>
            </nav>
        </header>
    )
}
export default Navbaar