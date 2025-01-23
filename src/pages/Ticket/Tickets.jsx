import { useState, useEffect } from "react";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import api from "../../../api";

const Tickets = () => {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedEvent, setSelectedEvent] = useState(null); // For modal
    const [ticketCount, setTicketCount] = useState(1); // Number of tickets
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

    // Show Modal
    const handleBuyTicket = (event) => {
        setSelectedEvent(event);
        setTicketCount(1); // Reset ticket count
    };

    // Close Modal
    const closeModal = () => {
        setSelectedEvent(null);
    };

    // Handle Ticket Count Change
    const increaseTickets = () => {
        setTicketCount((prevCount) => prevCount + 1);
    };

    const decreaseTickets = () => {
        setTicketCount((prevCount) => Math.max(1, prevCount - 1)); // Minimum of 1 ticket
    };

    // Handle Ticket Purchase
    const purchaseTickets = () => {
        console.log(`Purchasing ${ticketCount} tickets for event:`, selectedEvent);
        closeModal();
        alert(`Purchased ${ticketCount} ticket(s) for ${selectedEvent.event}.`);
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

    return (
        <div>
            <Navbar />
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
                                <th className="py-3 px-6 border-b text-left">Date</th>
                                <th className="py-3 px-6 border-b text-left">Start Time</th>
                                <th className="py-3 px-6 border-b text-left">End Time</th>
                                <th className="py-3 px-6 border-b text-left">Venue</th>
                                <th className="py-3 px-6 border-b text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEvents.length > 0 ? (
                                filteredEvents.slice(0, itemsPerPage).map((event) => (
                                    <tr key={event.schedule_id} className="hover:bg-gray-100">
                                        <td className="py-3 px-6 border-b">{event.event}</td>
                                        <td className="py-3 px-6 border-b">{event.discipline}</td>
                                    
                                        <td className="py-3 px-6 border-b">{event.day}</td>
                                        <td className="py-3 px-6 border-b">{event.formatted_start_time}</td> 
                                        <td className="py-3 px-6 border-b">{event.formatted_end_time}</td>   
                                        
                                        <td className="py-3 px-6 border-b">{event.location_description}</td>
                                        <td className="py-3 px-6 border-b">
                                            <button
                                                className="border px-4 py-2 rounded hover:bg-gray-200"
                                                onClick={() => handleBuyTicket(event)}
                                            >
                                                Buy Ticket
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="py-6 text-center text-2xl font-bold text-gray-500">
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

            {/* Modal */}
            {selectedEvent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
                        <h2 className="text-lg font-bold mb-4">Buy Ticket for {selectedEvent.event}</h2>
                        <div className="flex items-center mb-6">
                            <button
                                className="px-4 py-2 border rounded hover:bg-gray-200"
                                onClick={decreaseTickets}
                            >
                                -
                            </button>
                            <span className="px-4">{ticketCount}</span>
                            <button
                                className="px-4 py-2 border rounded hover:bg-gray-200"
                                onClick={increaseTickets}
                            >
                                +
                            </button>
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="px-4 py-2 bg-gray-500 text-white rounded mr-2"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded"
                                onClick={purchaseTickets}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Tickets;
