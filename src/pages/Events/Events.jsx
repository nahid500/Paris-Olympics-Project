<<<<<<< HEAD
import { useState, useEffect } from "react";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import api from "../../../api";

const Events = () => {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const itemsPerPage = 30; // 30 data items per page

    // Fetch Events Data
    useEffect(() => {
        const fetchEvents = async (page) => {
            try {
                const response = await api.get(`/api/schedules/?page=${page}`);
                setEvents(response.data.results);
                setFilteredEvents(response.data.results);
                setTotalPages(Math.ceil(response.data.count / itemsPerPage));
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents(currentPage);
    }, [currentPage]);

    // Pagination Click Handler
    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    // Search Events
    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
    
        const filtered = events.filter((event) =>
            (event.event?.toLowerCase().includes(term)) ||
            (event.discipline?.toLowerCase().includes(term)) ||
            (event.gender?.toLowerCase().includes(term)) ||
            (event.location_description?.toLowerCase().includes(term))
        );
        setFilteredEvents(filtered);
    };

    // Pagination Renderer
    const renderPagination = () => {
        const pages = [];

        if (totalPages <= 1) return null;

        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 || // Always show first page
                i === totalPages || // Always show last page
                (i >= currentPage - 2 && i <= currentPage + 2) // Show pages near the current page
            ) {
                pages.push(
                    <button
                        key={i}
                        onClick={() => handlePageClick(i)}
                        className={`border px-3 py-1 mx-1 ${
                            currentPage === i
                                ? "bg-gray-300 font-bold"
                                : "hover:bg-gray-100"
                        }`}
                    >
                        {i}
                    </button>
                );
            } else if (
                i === currentPage - 3 || i === currentPage + 3
            ) {
                pages.push(
                    <span key={`ellipsis-${i}`} className="mx-2">
                        ...
                    </span>
                );
            }
        }

        return pages;
    };
=======
import { useState } from 'react';
import Navbar from '../../components/NavBar';
import PageHeroSection from '../../components/PageHeroSection';
import Footer from '../../components/Footer';
import bgImage from '../../images/event_background.jpeg'
import Partners from '../../components/Partners';


const Events = () => {
    const events = [
        { id: 'e01', name: 'Archery', tag: 'Tag Archery', sport: 'Archery', code: 'CodeArchery', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e02', name: 'Artistic Gymnastics', tag: 'Tag Gymnastics', sport: 'Artistic Gymnastics', code: 'CodeGymnastics', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e03', name: 'Artistic Swimming', tag: 'Tag Swimming', sport: 'Artistic Swimming', code: 'CodeSwimming', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e04', name: 'Athletics', tag: 'Tag Athletics', sport: 'Athletics', code: 'CodeAthletics', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e05', name: 'Badminton', tag: 'Tag Badminton', sport: 'Badminton', code: 'CodeBadminton', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e06', name: 'Basketball', tag: 'Tag Basketball', sport: 'Basketball', code: 'CodeBasketball', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e07', name: 'Basketball 3x3', tag: 'Tag Basketball 3x3', sport: 'Basketball 3x3', code: 'CodeBasketball3x3', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e08', name: 'Beach Volleyball', tag: 'Tag Volleyball', sport: 'Beach Volleyball', code: 'CodeVolleyball', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e09', name: 'Boxing', tag: 'Tag Boxing', sport: 'Boxing', code: 'CodeBoxing', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e10', name: 'Breaking', tag: 'Tag Breaking', sport: 'Breaking', code: 'CodeBreaking', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e11', name: 'Canoe Slalom', tag: 'Tag Canoe Slalom', sport: 'Canoe Slalom', code: 'CodeCanoeSlalom', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e12', name: 'Canoe Sprint', tag: 'Tag Canoe Sprint', sport: 'Canoe Sprint', code: 'CodeCanoeSprint', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e13', name: 'Cycling BMX Freestyle', tag: 'Tag BMX Freestyle', sport: 'Cycling BMX Freestyle', code: 'CodeBMXFreestyle', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e14', name: 'Cycling BMX Racing', tag: 'Tag BMX Racing', sport: 'Cycling BMX Racing', code: 'CodeBMXRacing', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e15', name: 'Cycling Mountain Bike', tag: 'Tag Mountain Bike', sport: 'Cycling Mountain Bike', code: 'CodeMountainBike', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e16', name: 'Cycling Road', tag: 'Tag Road', sport: 'Cycling Road', code: 'CodeRoad', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e17', name: 'Cycling Track', tag: 'Tag Track', sport: 'Cycling Track', code: 'CodeTrack', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e18', name: 'Diving', tag: 'Tag Diving', sport: 'Diving', code: 'CodeDiving', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e19', name: 'Equestrian', tag: 'Tag Equestrian', sport: 'Equestrian', code: 'CodeEquestrian', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e20', name: 'Fencing', tag: 'Tag Fencing', sport: 'Fencing', code: 'CodeFencing', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e21', name: 'Football', tag: 'Tag Football', sport: 'Football', code: 'CodeFootball', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e22', name: 'Golf', tag: 'Tag Golf', sport: 'Golf', code: 'CodeGolf', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e23', name: 'Handball', tag: 'Tag Handball', sport: 'Handball', code: 'CodeHandball', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e24', name: 'Hockey', tag: 'Tag Hockey', sport: 'Hockey', code: 'CodeHockey', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e25', name: 'Judo', tag: 'Tag Judo', sport: 'Judo', code: 'CodeJudo', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e26', name: 'Marathon Swimming', tag: 'Tag Marathon', sport: 'Marathon Swimming', code: 'CodeMarathon', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e27', name: 'Modern Pentathlon', tag: 'Tag Pentathlon', sport: 'Modern Pentathlon', code: 'CodePentathlon', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e28', name: 'Rhythmic Gymnastics', tag: 'Tag Rhythmic', sport: 'Rhythmic Gymnastics', code: 'CodeRhythmic', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e29', name: 'Rowing', tag: 'Tag Rowing', sport: 'Rowing', code: 'CodeRowing', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e30', name: 'Rugby Sevens', tag: 'Tag Rugby', sport: 'Rugby Sevens', code: 'CodeRugby', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e31', name: 'Sailing', tag: 'Tag Sailing', sport: 'Sailing', code: 'CodeSailing', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e32', name: 'Shooting', tag: 'Tag Shooting', sport: 'Shooting', code: 'CodeShooting', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e33', name: 'Skateboarding', tag: 'Tag Skateboarding', sport: 'Skateboarding', code: 'CodeSkateboarding', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e34', name: 'Sport Climbing', tag: 'Tag Climbing', sport: 'Sport Climbing', code: 'CodeClimbing', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e35', name: 'Surfing', tag: 'Tag Surfing', sport: 'Surfing', code: 'CodeSurfing', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e36', name: 'Table Tennis', tag: 'Tag Tennis', sport: 'Table Tennis', code: 'CodeTennis', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e37', name: 'Taekwondo', tag: 'Tag Taekwondo', sport: 'Taekwondo', code: 'CodeTaekwondo', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e38', name: 'Tennis', tag: 'Tag Tennis', sport: 'Tennis', code: 'CodeTennis', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e39', name: 'Triathlon', tag: 'Tag Triathlon', sport: 'Triathlon', code: 'CodeTriathlon', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e40', name: 'Volleyball', tag: 'Tag Volleyball', sport: 'Volleyball', code: 'CodeVolleyball', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e41', name: 'Water Polo', tag: 'Tag Water Polo', sport: 'Water Polo', code: 'CodeWaterPolo', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' },
        { id: 'e42', name: 'Wrestling', tag: 'Tag Wrestling', sport: 'Wrestling', code: 'CodeWrestling', url: 'https://www.thereservegroup.co.za/wp-content/uploads/2023/12/archery-6.jpg' }
    ];
    

    // const [searchQuery, setSearchQuery] = useState('');
    // const [filteredEvents, setFilteredEvents] = useState(events);
    const [searchTerm, setSearchTerm] = useState(''); // State for search input

    // / Handle search input changes
    const handleSearch = (searchValue) => {
        setSearchTerm(searchValue); // Update the search term state
    };

    // Filter events based on search term
    const filteredEvents = events.filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
>>>>>>> 210ee058423c3e4bf45b7710be865b7f785d4f7e

    return (
        <div>
            <Navbar />
<<<<<<< HEAD
            <div className="container mx-auto px-4 py-6">
                {/* Search Box */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search events by Event, Discipline, Gender, or Location..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

                {/* Events Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto bg-white border border-gray-300 rounded-md shadow-md">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-3 px-6 border-b text-left">Event</th>
                                <th className="py-3 px-6 border-b text-left">Discipline</th>
                                <th className="py-3 px-6 border-b text-left">Gender</th>
                                <th className="py-3 px-6 border-b text-left">Venue</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEvents.length > 0 ? (
                                filteredEvents.slice(0, itemsPerPage).map((event) => (
                                    <tr key={event.schedule_id} className="hover:bg-gray-100">
                                        <td className="py-3 px-6 border-b">{event.event}</td>
                                        <td className="py-3 px-6 border-b">{event.discipline}</td>
                                        <td className="py-3 px-6 border-b">{
                                        event.gender=='W'? "Women":"Men"
                                        }</td>
                                        <td className="py-3 px-6 border-b">{event.location_description}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="py-6 text-center text-2xl font-bold text-gray-500">
                                        No Match Found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center mt-6">
                    <button
                        onClick={() => handlePageClick(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="border px-3 py-1 mx-1 hover:bg-gray-100 disabled:opacity-50"
                    >
                        Previous
                    </button>
                    {renderPagination()}
                    <button
                        onClick={() => handlePageClick(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="border px-3 py-1 mx-1 hover:bg-gray-100 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
=======
            <PageHeroSection handleSearch={handleSearch} />
            
            <div className="max-h-full bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
                
                <div className="p-6 mx-40 bg-slate-100">
                    <div className="bg-white mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {filteredEvents.map(event => (
                            <div key={event.id} className="border rounded-lg overflow-hidden shadow-lg">
                                <img src={event.url} alt={event.name} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-800">{event.name}</h3>
                                    <p className="text-sm text-gray-600">{event.tag}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Partners/>
            <Footer/>
        </div>
    );

    
>>>>>>> 210ee058423c3e4bf45b7710be865b7f785d4f7e
};

export default Events;
