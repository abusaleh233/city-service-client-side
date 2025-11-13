import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc"
import { toast } from 'react-toastify';
import { GoEye } from "react-icons/go";
import { IoEyeOffOutline } from "react-icons/io5";
import { AuthContext } from '../../conext/AuthContext';








const Registation = () => {
    const { createUser, updateUserProfile, signInWithGoogle,setLoading,signOutUser,setUser } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const displayName = e.target.displayName.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
       const regexp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/

       if(!regexp.test(password)){
        toast.error("Password must be at least 8 characters and include uppercase, lowercase, and a number.");
        return
       }
       createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(displayName, photoURL);
        setLoading(false);
            signOutUser().then(() => {
            toast.success("User created successfully!");
            setUser(null);
        });
        navigate("/auth/login");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });

    }

    const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("User created successfully!");
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

    return (
            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center">Register</h1>
                <form onSubmit={handleRegister}>
                    <fieldset className="fieldset">
                        {/* email field */}
                        <label className="label">Name</label>
                        <input
                        type="text"
                        name="displayName"
                        className="input rounded-full focus:border-0 focus:outline-gray-200"
                        placeholder="Name"
                        />

                        <label className="label">PhotoURL</label>
                        <input
                        type="text"
                        name="photoURL"
                        className="input rounded-full focus:border-0 focus:outline-gray-200"
                        placeholder="Photo URL"
                        />
                        {/* email field */}
                        <label className="label">Email</label>
                        <input
                        type="email"
                        name="email"
                        className="input rounded-full focus:border-0 focus:outline-gray-200"
                        placeholder="Email"
                        />
                        {/* password field */}
                        <label className="label">Password</label>
                        <div className='relative'>
                           
                            <input
                            type={show ? "text" : "password"}
                            name="password"
                            className="input rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Password"/>
                            <span onClick={()=>setShow(!show)} className='absolute right-[10px] top-[15px] cursor-pointer z-50'>
                                {show ? <GoEye /> : <IoEyeOffOutline /> }
                            </span>
                        </div>
                        

                        <div>
                        <a className="link link-hover">Forgot password?</a>
                        </div>

                        <button className="btn text-white mt-4 rounded-full bg-linear-to-r from-cyan-500 to-blue-600">
                        Register
                        </button>
                    </fieldset>
                </form>

                    <button onClick={handleGoogleSignIn} className="btn bg-white rounded-full text-black border-[#e5e5e5]" >
                     <FcGoogle /> Login with Google </button>

                    <p className="text-center"> Already have an account? Please
                    <Link className="text-blue-500 hover:text-blue-800" to="/auth/login"> Login</Link>{" "}
                    </p>
                </div>
        </div>
    );
};

export default Registation;
