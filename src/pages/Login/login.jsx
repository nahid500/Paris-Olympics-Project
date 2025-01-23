import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/NavBar';
import loginImage from '../../images/login-reg-img.png';
import api from '../../../api';
import Loading from '../../components/Loader';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../../constants';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const handleLogin = async (e) => {
        
        setLoading(true);
        e.preventDefault();
        
        try{
            const response = await api.post("/api/token/", {username, password});
            localStorage.setItem(ACCESS_TOKEN, response.data.access);
            localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
            localStorage.setItem("username", response.data.username);
            localStorage.setItem("email", response.data.email);
            console.log("Access Token:", localStorage.getItem("access_token"));
            console.log("Refresh Token:", localStorage.getItem("refresh_token"));

            navigate('/');
        }
        catch(error){
            alert(error);
        }
        finally{
            setLoading(false);
        }
        
    };

    return (
        <div>
            <Navbar />
            <div
                className="flex justify-center items-center h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${loginImage})` }}
            >
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-6 relative w-[80%] mx-auto">
                            <input
                                type="text"
                                name="username"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                                required
                            />
                            <span className="absolute top-3.5 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300">
                                Username
                            </span>
                        </div>
                        <div className="mb-6 relative w-[80%] mx-auto">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                                required
                            />
                            <span className="absolute top-3.5 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300">
                                Password
                            </span>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-3 rounded mt-4"
                        >
                            Login
                        </button>
                    </form>
                    <div className="text-center mt-4">
                        <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
                    </div>
                    <div className="text-center mt-2">
                        <Link to="/signup" className="text-blue-500 hover:underline">Don&apos;t have an account? Register here</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;