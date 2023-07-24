import React from 'react';
import "./signup.css";
import { NavLink } from 'react-router-dom';
import { useState } from "react";

const Sign_in = () => {

    const [logdata,setData] = useState({
        email:"",
        password:""
    });

    const addData= (e) => {
        const {name,value} = e.target;

        setData(() =>{
            return{
                ...logdata,
                [name]: value
            }
        })
    };

    return(
        <section>
            <div className='sign_container'>
                
                <div className='sign_form'>
                    <form>
                        <h1>Sign in</h1>
                        <div className='form_data'>
                            <label htmlFor='email'>Email</label>
                            <input type='email'
                            onChange={addData}
                            value={logdata.email}
                            name='email' id='email'/>
                        </div>
                        <div className='form_data'>
                            <label htmlFor='password'>Password</label>
                            <input type='password'
                            onChange={addData}
                            value={logdata.password}
                            placeholder='At least 8 charecters' name='password' id='password'/>
                        </div>
                        <button className='signin_btn'>Continue</button>
                    </form>
                </div>
                <div className='create_accountinfo'>
                    <p>New user?</p>
                    <NavLink to="/register"><button>Create New Account</button></NavLink>
                </div>
            </div>
        </section>
    )
}

export default Sign_in;
