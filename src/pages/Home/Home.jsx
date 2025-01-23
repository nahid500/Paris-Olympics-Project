// import React, { Component } from 'react'
import Navbar from '../../components/NavBar';
import HeroSection from '../../components/Home/HeroSection';
import Highlights_card from '../../components/Home/Highlights_card';
import Footer from '../../components/Footer';
import Partners from '../../components/Partners';

const Home = () =>{

    
    return(
        <div>
            
            <Navbar/> 
            <HeroSection/>
            <Highlights_card/>
            <Partners/>
            <Footer/>
        </div>
    )

}

export default Home;