import React, { useContext, useEffect, useState } from 'react';
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router';
import MyLink from './MyLink';
import { AuthContext } from '../conext/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
     const { user,setUser, signOutUser, } = useContext(AuthContext);


//  Them handel
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

  useEffect(() => {
    const html = document.querySelector('html')
     html.setAttribute("data-theme", theme)
     localStorage.setItem("theme", theme)
  }, [theme])

//   them function
  const handleTheme = (checked) => {
    setTheme(checked ? "dark": "light")
  }




    // handel logout funtion
     const handelLogout = () =>{
       signOutUser().then(() => {
            toast.success("Sign-out successful.");
            setUser(null)
        }).catch((e) => {
          toast.error(e.message);
        });

    }

    return (
        <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><MyLink to={'/'}>Home</MyLink></li>
                        <li><MyLink to={'/allissues'}>All Issues</MyLink></li>
                            {user && (
                                <>
                                <li><MyLink to={'/addissues'}>Add Issues</MyLink></li>
                                <li> <MyLink to={'/myissues'}>My Issues</MyLink></li>
                                <li><MyLink to={'/mycontribution'}>My Contribtion</MyLink></li>
                                </>
                            )}
                    </ul>
                    </div>
                    <div className='flex items-center gap-2'>
                        <figure><img className='h-14 w-14 rounded' src={logo} alt="" /></figure>
                        <a className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-800">City Service</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><MyLink to={'/'}>Home</MyLink></li>
                        <li><MyLink to={'/allissues'}>All Issues</MyLink></li>
                        {user && (
                            <>
                            <li><MyLink to={'/addissues'}>Add Issues</MyLink></li>
                             <li> <MyLink to={'/myissues'}>My Issues</MyLink></li>
                             <li><MyLink to={'/mycontribution'}>My Contribtion</MyLink></li>
                            </>
                        )}
                    </ul>
                </div>
                {/* NavbarEnd */}

                <div className="navbar-end">
                    <div>
                        <input onChange={(e)=> handleTheme(e.target.checked)}
                            type="checkbox"
                            defaultChecked={localStorage.getItem('theme') === "dark"}
                            className="mr-5 toggle"/>
                     </div>



                    {user ? (
                    <div className="dropdown dropdown-end z-50">
                        <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                        >
                        <div className="w-9 border-2 border-gray-300 rounded-full">
                            <img
                            alt="Tailwind CSS Navbar component"
                            referrerPolicy="no-referrer"
                            src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                            />
                        </div>
                        </div>
                        <ul
                        tabIndex="-1"
                        className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                        >
                        <div className=" pb-3 border-b border-b-gray-200">
                            <li className="text-sm font-bold">{user.displayName}</li>
                            <li className="text-xs">{user.email}</li>
                        </div>
                        <li>
                            <button
                            onClick={handelLogout}
                            className="btn btn-xs text-left bg-linear-to-r from-pink-500 to-red-500 text-white"
                            >
                            Logout
                            </button>
                        </li>
                        </ul>
                    </div>
                    ) : (
                    <>
                    <div className='flex gap-3'>
                         <Link to={"/auth/login"}
                        className="btn rounded-full border-gray-300  btn-sm bg-linear-to-r from-cyan-500 to-blue-800 text-white px-5">Login
                        </Link>
                        <Link to={'/auth/register'}
                        className="btn rounded-full border-gray-300  btn-sm bg-linear-to-r from-cyan-500 to-blue-800 text-white">Registation
                        </Link>
                    </div>
                        
                   
                        </>
                    )}
                </div>
        </div>
    );
};

export default Navbar;