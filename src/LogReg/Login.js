import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RxCrossCircled } from 'react-icons/rx';
import { AuthContext } from '../ContextApi/UserContext';
import './Login.css'
import Swal from 'sweetalert2';
import LoadingElement from '../Components/LoadingElement';

const Login = () => {
    const { user, loginWithEmailPass, passwordReset, googleLoginPopUp } = useContext(AuthContext)
    const [pageLoader, setPageLoader] = useState(false)
    const [processing, setProcessing] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    const loginHandler = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        setProcessing(true)
        loginWithEmailPass(email, password)
            .then(result => {
                navigate('/')
                setPageLoader(true)

            })
            .catch(error => {
                const message = error.message
                setProcessing(false)
                // toast.error(message)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${message}`,
                    footer: '<a href="/contact">Need Help?<a>'
                });
            })

    }
    const googleHandler = () => {

        googleLoginPopUp()
            .then(result => {
                const user = result.user
                setPageLoader(true)
                savedDataPopUp(user.displayName, user.email)
            })
            .catch(error => {
                const message = error.message
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${message}`,
                    footer: '<a href="/contact">Need Help?<a>'
                });

            })
    }
    const savedDataPopUp = (name, email) => {
        const userInfo =
        {
            name,
            email,

        }
        fetch('https://data-science-server.vercel.app/users/popup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {

                // toast.success("successfully login")
                navigate('/')
            })
    }
    const popUpErrorHandler = () => {

        Swal.fire({
            title: "Opps!",
            text: "Something went wrong.This feature has been updated later!",
            icon: "question"
        });
    }
    if (pageLoader === true) {
        return <LoadingElement></LoadingElement>
    }
    return (
        <div className="mt-40">
            <div className='mainSection'>
                <div id="login-box">
                    <form onSubmit={loginHandler} className="left">
                        <h1>Log In</h1>
                        <input type="email" name="email" placeholder="E-mail" />
                        <input type="password" name="password" placeholder="Password" />
                        {processing ? <button type="submit" name="signup_submit" disabled><RxCrossCircled className='inline mb-1' size={18} /> Log In </button> : <button type="submit" name="signup_submit"> Log In </button>}
                        <div className='mt-5'>
                            <p>New to the website? <Link className='text-blue-500 font-normal' to="/register">Register </Link> </p>
                        </div>
                    </form>

                    <div className="right">
                        <span className="loginwith">Sign in with<br />social network</span>

                        <button onClick={popUpErrorHandler} className="social-signin facebook">Log in with facebook</button>
                        <button onClick={popUpErrorHandler} className="social-signin twitter">Log in with Twitter</button>
                        <button onClick={googleHandler} className="social-signin google">Log in with Google+</button>
                    </div>
                    <div className="or">OR</div>
                </div>
            </div >

        </div>
    );
};

export default Login;