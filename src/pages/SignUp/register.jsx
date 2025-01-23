import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/NavBar";
import registerImage from "../../images/login-reg-img.png";
import api from "../../../api"; // Import your Axios instance

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Make API call for registration
            const response = await api.post("/api/user/register/", {
                email,
                username,
                password,
            });

            console.log("Registration successful:", response.data);
            alert("Registration successful! Please log in.");
            navigate("/login"); // Redirect to login page
        } catch (error) {
            console.error("Registration error:", error.response || error);
            if (error.response && error.response.data) {
                alert(`Registration failed: ${JSON.stringify(error.response.data)}`);
            } else {
                alert("An error occurred during registration. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div
                className="flex justify-center items-center h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${registerImage})` }}
            >
                <div className="bg-white p-8 rounded shadow-lg w-full max-w-lg">
                    <h2 className="text-2xl mb-6 font-bold text-center">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6 relative w-[80%] mx-auto">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                                required
                            />
                            <span className="absolute top-3.5 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300">
                                Email
                            </span>
                        </div>
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
                            className="w-full bg-blue-500 text-white p-3 rounded mt-4 hover:bg-blue-600"
                            disabled={loading}
                        >
                            {loading ? "Registering..." : "Register"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
