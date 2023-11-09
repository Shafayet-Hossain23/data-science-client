import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RxCrossCircled } from 'react-icons/rx';
import { AuthContext } from '../ContextApi/UserContext';
import LoadingElement from '../Components/LoadingElement';
import Swal from 'sweetalert2';
import logo from '../assets/logo/logo-bdu.png'
import Login from './Login';



const Register = () => {
    const { registerWithEmailPass, profileUpdate, emailVerification, setLoading } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [pageLoader, setPageLoader] = useState(false)
    const [processing, setProcessing] = useState(false)

    const navigate = useNavigate()

    const registerFormHandler = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        // console.log(name, email, password)
        setError('')
        setProcessing(true)

        registerWithEmailPass(email, password)
            .then(result => {
                // const user = user.result
                profileUpdate(name)
                    .then(result => {
                        saveUserData(name, email)
                        setPageLoader(true)
                    })

            })
            .catch(error => {
                const message = error.message
                // setError(message)
                // toast.error(message)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${message}`,
                    footer: '<a href="/contact">Need Help?<a>'
                });
                setProcessing(false)

            })
    }
    const saveUserData = (name, email) => {
        const userInfo = {
            name,
            email,
            // status: "admin"
        }
        fetch(`https://data-science-server.vercel.app/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    navigate('/')
                    setLoading(false)
                    // console.log(data)
                }
            })
    }
    if (pageLoader === true) {
        return <LoadingElement></LoadingElement>
    }
    return (
        <div className='mt-40'>
            <div className='mainSection '>
                <div id="login-box">
                    <form onSubmit={registerFormHandler} className="left">
                        <h1>Register</h1>
                        <input type="text" name="name" placeholder="Username" required />
                        <input type="email" name="email" placeholder="E-mail" required />
                        <input type="password" name="password" placeholder="Password" required />
                        {/* <div>
                            {error && <div className='text-red-600 mt-4'>{error}</div>}
                        </div> */}
                        {
                            processing ? <button disabled type="submit" > <RxCrossCircled className='inline mb-1' size={18} /> REgister </button> : <button type="submit" > Register </button>
                        }
                        {/* <div className='mt-5 '>
                            <p>Have an account? <Link className='text-blue-500 font-normal' to="/login">Log In </Link> </p>
                        </div> */}
                    </form>
                    <div className="right mt-14">

                        <span className="loginwith">Sign in with<br />social network</span>
                        <button className="social-signin facebook"> <Link to='/login'>Have an account? Login</Link></button>
                        <button className="social-signin twitter"> <Link to='/contact'>Need help? Contact</Link></button>
                        {/* <button className="social-signin google">Log in with Google+</button> */}
                    </div>
                    {/* <div className="or">Or</div> */}
                </div>
                {/* <Toaster></Toaster> */}
            </div >
        </div>
    );
};

export default Register;