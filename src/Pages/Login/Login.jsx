import { useContext, useEffect, useState } from 'react';
import img1 from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../Provider/SocialLogin';


const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value
        console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
    }

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        loginUser(email, password)
            .then(result => {
                const user = result.user
                console.log('user login', user)
                Swal.fire({
                    title: "User Logged In successfully",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.log(error)
            })

    }



    return (
        <>
            <Helmet>
                <title>Boss Restaurant | Login</title>
            </Helmet>
            <div className="hero min-h-screen p-24">
                <div className="hero-content flex-col lg:flex-row justify-center items-center py-16 shadow-lg border">
                    <div className="w-1/2">
                        <img src={img1} alt="" />
                    </div>
                    <div className='w-1/2 flex flex-col items-center justify-center'>
                        <h2 className='text-4xl pb-6 font-bold text-center'>Login</h2>
                        <div className="w-full max-w-sm">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="input the captcha here" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <input disabled={disabled} className="btn bg-orange-300" type="submit" value="Login" />
                                </div>
                            </form>
                            <p className='mt-4'>New to Boss Restaurant? <Link to={'/signup'} className='font-bold underline text-orange-600'>Sign Up</Link></p>

                            <SocialLogin></SocialLogin>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Login;