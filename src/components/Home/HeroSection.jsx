
const HeroSection = () =>{
    return(
        <div className='flex content-normal items-center bg-hero-bg bg-center bg-no-repeat bg-cover h-[650px] w-full'>

            <div className="w-full">
                <div className="">
                    <h1 className='text-white text-center text-6xl font-bold'> Welcome to Paris Olympics 2024</h1>
                    <h2 className='text-white text-center text-2xl font-bold py-1'>Uniting the World in Sport and Spirit</h2>
                </div>

            <div className='my-5 w-full xl:w-1/3 lg:1/2 md:2/3 mx-auto p-2 '>
                <input type='search' className='p-3 rounded w-full focus:outline-none' placeholder='Search for games, events, athletes, venues......' />
            </div>
                
            </div>

        </div>
    )
    
}

export default HeroSection;