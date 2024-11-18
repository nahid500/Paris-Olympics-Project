
// react icons
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="bg-cyan-900 boxShadow w-full p-6 lg:p-9 text-white">
            <div className="flex justify-between gap-[30px] flex-wrap w-full">
                <div>
                    <h3 className="text-[1.2rem] font-semibold mb-2">Services</h3>
                    <div className="flex flex-col gap-[10px]">
                        <p className="text-[0.9rem] hover:text-primary cursor-pointer transition-all duration-200">Events</p>
                        <p className="text-[0.9rem] hover:text-primary cursor-pointer transition-all duration-200">Athletes</p>
                        <p className="text-[0.9rem] hover:text-primary cursor-pointer transition-all duration-200">Countries</p>
                        <p className="text-[0.9rem] hover:text-primary cursor-pointer transition-all duration-200">Opacity Palette</p>
                        <p className="text-[0.9rem] hover:text-primary cursor-pointer transition-all duration-200">Blocks</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-[1.2rem] font-semibold mb-2">Company</h3>
                    <div className="flex flex-col gap-[10px]">
                        <p className="text-[0.9rem] hover:text-primary cursor-pointer transition-all duration-200">Service</p>
                        <p className="text-[0.9rem] hover:text-primary cursor-pointer transition-all duration-200">Features</p>
                        <p className="text-[0.9rem] hover:text-primary cursor-pointer transition-all duration-200">Our Team</p>
                        <p className="text-[0.9rem] hover:text-primary cursor-pointer transition-all duration-200">Portfolio</p>
                        <p className="text-[0.9rem] hover:text-primary cursor-pointer transition-all duration-200">Blog</p>
                        <p className="text-[0.9rem] hover:text-primary cursor-pointer transition-all duration-200">Contact Us</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-[1.2rem] font-semibold mb-2">Find Us At</h3>
                    <div className="flex flex-col gap-[10px]">
                        <p className="text-[0.9rem] hover:text-primary cursor-pointer transition-all duration-200">Facebook</p>
                        <p className="text-[0.9rem] hover:text-primary cursor-pointer transition-all duration-200">Instagram</p>
                        <p className="text-[0.9rem] hover:text-primary cursor-pointer transition-all duration-200">Twitter</p>
                        <p className="text-[0.9rem] hover:text-primary cursor-pointer transition-all duration-200">Olympic News</p>
                        <p className="text-[0.9rem] hover:text-primary cursor-pointer transition-all duration-200">LinkedIn</p>
                        <p className="text-[0.9rem] hover:text-primary cursor-pointer transition-all duration-200">X</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-[1.2rem] font-semibold mb-2">Join a Newsletter</h3>
                    <div className="flex gap-[2px] flex-col relative">
                        <label className="text-[0.9rem]">Your Email</label>
                        <input type="email"
                            className="text-black py-3 px-4 w-full pr-[90px] rounded-md border border-primary outline-none"
                            placeholder="Email address" />
                        <button className="px-4 h-[67%] rounded-r-md bg-primary text-white absolute top-[24px] right-0">Submit</button>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-[20px] mt-[40px] flex items-center justify-between w-full flex-wrap gap-[20px]">
                <img src="/src/images/logo.png" alt="logo" className="w-[100px]" />
                <p className="text-[0.9rem]">© 2024 Paris Olympics. All Rights Reserved. </p>
                <div className="flex items-center gap-[10px]">
                    <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300">
                        <CgFacebook />
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300">
                        <BsTwitter />
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300">
                        <BsInstagram />
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300">
                        <BsLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
