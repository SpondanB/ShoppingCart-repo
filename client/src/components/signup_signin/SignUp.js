import React from 'react';
import "./signup.css";
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import { Divider } from '@mui/material';

const SignUp = () => {

    const [udata, setUdata] = useState({
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""
    });
    const addData = (e) => {
        const { name, value } = e.target;

        setUdata(() =>{
            return{
                ...udata,
                [name]: value
            }
        })
    };
    

    return (
        <section>
            <div className='sign_container'>

                <div className='sign_form'>
                    <form>
                        <h1>Create Account</h1>
                        <div className='form_data'>
                            <label htmlFor='fname'>Name</label>
                            <input type='text'
                            onChange={addData}
                            value={udata.fname}
                            name='fname' id='fname' />
                        </div>
                        <div className='form_data'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' 
                            onChange={addData}
                            value={udata.email}
                            name='email' id='email' />
                        </div>
                        <div className='form_data'>
                            <label htmlFor='mobile'>Mobile Number</label>
                            <input type='number' 
                            onChange={addData}
                            value={udata.mobile}
                            name='mobile' id='mobile' />
                        </div>
                        <div className='form_data'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' 
                            onChange={addData}
                            value={udata.password}
                            placeholder='At least 8 charecters' name='password' id='password' />
                        </div>
                        <div className='form_data'>
                            <label htmlFor='cpassword'>Password Again</label>
                            <input type='password' 
                            onChange={addData}
                            value={udata.cpassword}
                            name='cpassword' id='cpassword' />
                        </div>
                        <button className='signin_btn'>Continue</button>
                    </form>
                    <Divider/>
                    <div className='signin_info'>
                        <p>Already have an Account </p>
                        <NavLink to="/login">Sign in</NavLink>
                    </div>
                </div>
                <div className='create_accountinfo'>
                    <p></p>
                </div>
            </div>
        </section>
    )
}

export default SignUp;
