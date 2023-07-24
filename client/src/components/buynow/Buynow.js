import React from "react";
import "./buynow.css";
import { Divider } from "@mui/material";
import Option from "./Option";
import Subtotal from "./Subtotal";
import Right from "./Right";


const Buynow = () =>{
    return(
        <div className="buynow_section">
            <div className="buynow_container">
                <div className="left_buy">
                    <h1>Shopping Cart</h1>
                    <p>Select all items</p>
                    <span className="leftbuyprice">Price</span>
                    <Divider/>
                    <div className="item_containert">
                        <img src="https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70"/>
                        <div className="item_details">
                            <h3>Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)</h3>
                            <h3>Sandwich Makers</h3>
                            <h3 className="diffrentprice">₹1195</h3>
                            <p className="unusuall">Usually dispatched in 6-8 days</p>
                            <p>Eligible for free shipping.</p>
                            <Option />
                        </div>
                        <h3 className="item_price">₹1195</h3>
                    </div>
                    <Divider/>
                    <Subtotal />
                </div>
                <Right/>
            </div>
        </div>
    )
}

export default Buynow;
