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