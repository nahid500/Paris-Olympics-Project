<<<<<<< HEAD
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../images/rsz_logo.png';
import { REFRESH_TOKEN, ACCESS_TOKEN } from '../../constants';  
const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track authentication state
    const navigate = useNavigate();

    // Check if the user is authenticated on component mount
    useEffect(() => {
        const token = localStorage.getItem(ACCESS_TOKEN); // Replace with your token key
        const username = localStorage.getItem("username");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem(ACCESS_TOKEN); // Remove the token from storage
        localStorage.removeItem(REFRESH_TOKEN); // Remove refresh token if applicable
        localStorage.clear(); // Clear all storage
        setIsLoggedIn(false); 
        navigate('/'); 
    };

    return (
        <div className="bg-gray-100 h-20 md:h-16 sticky top-0 shadow-md z-10">
            <div className="container mx-auto flex content-between items-center p-2">
                <Link to="/">
                    <img src={logo} alt="logo" className="rounded-full" />
                </Link>

                <div className="ms-auto">
                    <NavLink
                        to="/events"
                        className={({ isActive }) =>
                            isActive
                                ? 'px-3 py-1 text-white border border-sky-800 bg-sky-800 rounded-md mx-2'
                                : 'px-3 py-1 mx-2 text-black border rounded-md hover:bg-sky-800 hover:text-white'
                        }
                    >
                        Events
                    </NavLink>
                    <NavLink
                        to="/athletes"
                        className={({ isActive }) =>
                            isActive
                                ? 'px-3 py-1 text-white border border-sky-800 bg-sky-800 rounded-md mx-2'
                                : 'px-3 py-1 mx-2 text-black border rounded-md hover:bg-sky-800 hover:text-white'
                        }
                    >
                        Athletes
                    </NavLink>
                    <NavLink
                        to="/countries"
                        className={({ isActive }) =>
                            isActive
                                ? 'px-3 py-1 text-white border border-sky-800 bg-sky-800 rounded-md mx-2'
                                : 'px-3 py-1 mx-2 text-black border rounded-md hover:bg-sky-800 hover:text-white'
                        }
                    >
                        Countries
                    </NavLink>

                    <NavLink
                        to="/medalist"
                        className={({ isActive }) =>
                            isActive
                                ? 'px-3 py-1 text-white border border-sky-800 bg-sky-800 rounded-md mx-2'
                                : 'px-3 py-1 mx-2 text-black border rounded-md hover:bg-sky-800 hover:text-white'
                        }
                    >
                        Medalist
                    </NavLink>

                    <NavLink
                        to="/buyticket"
                        className={({ isActive }) =>
                            isActive
                                ? 'px-3 py-1 text-white border border-sky-800 bg-sky-800 rounded-md mx-2'
                                : 'px-3 py-1 mx-2 text-black border rounded-md hover:bg-sky-800 hover:text-white'
                        }
                    >
                        Buy Tickets
                    </NavLink>

                    {/* Conditionally render Login or Logout button */}
                    {!isLoggedIn ? (
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive
                                    ? 'px-3 py-1 text-white border border-sky-800 bg-sky-800 rounded-md mx-2'
                                    : 'px-3 py-1 mx-2 text-black border rounded-md hover:bg-sky-800 hover:text-white'
                            }
                        >
                            Login
                        </NavLink>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className="px-3 py-1 mx-2 text-black border rounded-md hover:bg-red-600 hover:text-white"
                        >
                            Logout
                        </button>
                    )}


                </div>
            </div>
        </div>
    );
};

export default Navbar;
=======
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/rsz_logo.png'

const Navbar = () =>{
    return(
        <div className='bg-gray-100 h-20 md:h-16 sticky top-0 shadow-md z-10'>
            <div className="container mx-auto flex content-between items-center p-2">
                <Link to ='/'><img src={logo} alt="logo" className='rounded-full'/> </Link>

                <div className='ms-auto'>
                    <NavLink to = '/events' className={({isActive}) => (
                        isActive ? 'px-3 py-1 text-white border border-sky-800 bg-sky-800 rounded-md mx-2' : 'px-3 py-1 mx-2 text-black border rounded-md hover:bg-sky-800 hover:text-white'
                    )}>Events</NavLink>
                    <NavLink to = '/athletes' className={({isActive}) => (
                        isActive ? 'px-3 py-1 text-white border border-sky-800 bg-sky-800 rounded-md mx-2' : 'px-3 py-1 mx-2 text-black border rounded-md hover:bg-sky-800 hover:text-white'
                    )}>Athletes</NavLink>
                    <NavLink to = '/countries' className={({isActive}) => (
                        isActive ? 'px-3 py-1 text-white border border-sky-800 bg-sky-800 rounded-md mx-2' : 'px-3 py-1 mx-2 text-black border rounded-md hover:bg-sky-800 hover:text-white'
                    )}>Countries</NavLink>
                    <NavLink to = '/login' className={({isActive}) => (
                        isActive ? 'px-3 py-1 text-white border border-sky-800 bg-sky-800 rounded-md mx-2' : 'px-3 py-1 mx-2 text-black border rounded-md hover:bg-sky-800 hover:text-white'
                    )}>Login</NavLink>

                    {/* <NavLink to = '/medalists'>Medalists</NavLink> */}
                    {/* <NavLink to = '/admin'>Admin</NavLink>
                    <NavLink to = '/dashboard'>Dashboard</NavLink> */}

                </div>
            </div>
            
        </div>
    )

}

export default Navbar;
>>>>>>> 210ee058423c3e4bf45b7710be865b7f785d4f7e
