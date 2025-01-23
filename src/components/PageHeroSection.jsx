
const PageHeroSection = ({ handleSearch }) => {
    return (
        <div className='flex content-normal items-center bg-hero-bg bg-center bg-no-repeat bg-cover h-[350px] w-full'>
            
            <div className="w-full">
                <div className='my-5 w-full xl:w-1/3 lg:1/2 md:2/3 mx-auto p-2'>
                    <input
                        type='search'
                        className='p-3 rounded w-full focus:outline-none'
                        placeholder='Search for events.....'
                        onChange={(e) => handleSearch(e.target.value)} // Call handleSearch with input value
                        />
                </div>
            </div>
        </div>
    );
};

export default PageHeroSection;
