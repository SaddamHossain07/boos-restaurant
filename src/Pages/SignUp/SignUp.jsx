
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../../assets/others/authentication1.png'
import { useForm } from "react-hook-form"
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic/useAxiosPublic';
import useAuth from '../../Hooks/useAuth/useAuth';
import SocialLogin from '../../Provider/SocialLogin';

const SignUp = () => {

    const { createUser, updateUserProfile } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                console.log('user created', result.user)
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photo: data.photo
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User updated successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <>
            <Helmet>
                <title>Boss Restaurant | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen p-24">
                <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center py-16 shadow-lg border">
                    <div className="w-1/2">
                        <img src={img1} alt="" />
                    </div>
                    <div className='w-1/2 flex flex-col items-center justify-center'>
                        <h2 className='text-4xl pb-6 font-bold text-center'>Sign Up</h2>
                        <div className="w-full max-w-sm">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name")} name='name' placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" {...register("photo")} name='photo' placeholder="photo url" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className='text-xs text-red-700 mt-2'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/ })} name='password' placeholder="password" className="input input-bordered" />
                                    {errors.password && <span className='text-xs text-red-700 mt-2'>The password must be 6 characters, with at least a symbol, upper and lower case letters and a number</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-orange-300" type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <p className='mt-4'>Already have an account? <Link to={'/login'} className='font-bold underline text-orange-600'>Login</Link></p>


                            <SocialLogin></SocialLogin>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default SignUp;