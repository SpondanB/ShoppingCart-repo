import { Divider } from "@mui/material";
import "./cart.css";
import React from "react";


const Cart = ()=>{
    return(
        <div className="cart_section">
            <div className="cart_container">
                <div className="left_cart">
                    <img src="https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70" />
                    <div className="cart_btn">
                        <button className="cart_btn1">Add to cart</button>
                        <button className="cart_btn2">Buy now</button>
                    </div>
                </div>
                <div className="right_cart">
                    <h3>Sandwich Makers</h3>
                    <h4>Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)</h4>
                    <Divider/>
                    <p className="mrp">M.R.P.: ₹1195</p>
                    <p>Deal of the Day: <span style={{color:"#B12704"}}>₹625</span></p>
                    <p>You save: <span style={{color:"#B12704"}}>₹570 (47%)</span></p>
                    <div className="discount_box">
                        <h5>Discount: <span style={{color:"#111"}}>Extra 10% Off</span></h5>
                        <h4>Free Delivery: <span style={{color:"#111", fontWeight:600}}> Oct 8th to 21</span> Detail</h4>
                        <p>Fastest Delivery: <span style={{color:"#111", fontWeight:600}}>Tomorrow 11AM</span></p>
                    </div>
                    <p className="description">About this item: <span style={{color:"#565959", fontWeight:500, fontSize:14,letterSpacing:"0.4px"}}>The classical mirror polish of the appearance makes your electric kettle unique and aesthetic, which can match any type of kitchen design and 360° swivel base is connected with standard power cord for safe usage and convenient storage</span> </p>
                </div>
            </div>
        </div>
    )
}

export default Cart;
