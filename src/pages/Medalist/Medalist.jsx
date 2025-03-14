import { useState, useEffect } from "react";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import api from "../../../api";

const Medalist = () => {
    const [medalists, setMedalists] = useState([]);
    const [filteredMedalists, setFilteredMedalists] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const itemsPerPage = 30; // 30 data items per page

    // Fetch Medalist Data
    useEffect(() => {
        const fetchMedalists = async (page) => {
            try {
                const response = await api.get(`/api/medals/?page=${page}`);
                setMedalists(response.data.results);
                setFilteredMedalists(response.data.results);
                setTotalPages(Math.ceil(response.data.count / itemsPerPage));
            } catch (error) {
                console.error("Error fetching medalists:", error);
            }
        };

        fetchMedalists(currentPage);
    }, [currentPage]);

    // Pagination Click Handler
    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    // Search Medalists
    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = medalists.filter((medalist) =>
            (medalist.name?.toLowerCase().includes(term)) ||
            (medalist.medal_type?.toLowerCase().includes(term)) ||
            (medalist.event?.toLowerCase().includes(term)) ||
            (medalist.country_long?.toLowerCase().includes(term)) ||
            (medalist.medal_date?.includes(term)) // For date search
        );

        setFilteredMedalists(filtered);
        
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
                        placeholder="Search medalists by Name, Medal Type, Event, Country, or Date..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

                {/* Medalists Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto bg-white border border-gray-300 rounded-md shadow-md">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-3 px-6 border-b text-left">Name</th>
                                <th className="py-3 px-6 border-b text-left">Medal Type</th>
                                <th className="py-3 px-6 border-b text-left">Date</th>
                                <th className="py-3 px-6 border-b text-left">Event</th>
                                <th className="py-3 px-6 border-b text-left">Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredMedalists.length > 0 ? (
                                filteredMedalists.slice(0, itemsPerPage).map((medalist) =>(

                                        <tr key={medalist.medal_id} className="hover:bg-gray-100">
                                            <td className="py-3 px-6 border-b">{medalist.name}</td>
                                            <td className="py-3 px-6 border-b">{medalist.medal_type}</td>
                                            <td className="py-3 px-6 border-b">{medalist.medal_date}</td>
                                            <td className="py-3 px-6 border-b">{medalist.event}</td>
                                            <td className="py-3 px-6 border-b">{medalist.country_long}</td>
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
            <Footer />
        </div>
    );
};

export default Medalist;
