<<<<<<< HEAD
import { useState, useEffect } from "react";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import api from "../../../api";

const Athletes = () => {
    const [athletes, setAthletes] = useState([]);
    const [filteredAthletes, setFilteredAthletes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const itemsPerPage = 30; // 30 data items per page

    useEffect(() => {
        const fetchAthletes = async (page) => {
            try {
                const response = await api.get(`/api/athletes/?page=${page}`);
                setAthletes(response.data.results);
                setFilteredAthletes(response.data.results);
                setTotalPages(Math.ceil(response.data.count / itemsPerPage));
            } catch (error) {
                console.error("Error fetching athletes:", error);
            }
        };

        fetchAthletes(currentPage);
    }, [currentPage]);

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = athletes.filter((athlete) =>
            athlete.name.toLowerCase().includes(term) ||
            athlete.country_long.toLowerCase().includes(term) ||
            athlete.gender.toLowerCase().includes(term) ||
            athlete.disciplines.toLowerCase().includes(term)
        );
        setFilteredAthletes(filtered);
    };

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
                i === currentPage - 3 || // Add "..." before current range
                i === currentPage + 3
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
                        placeholder="Search athletes by Name, Country, Gender, or Discipline..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto bg-white border border-gray-300 rounded-md shadow-md">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-3 px-6 border-b text-left">Name</th>
                                <th className="py-3 px-6 border-b text-left">Country</th>
                                <th className="py-3 px-6 border-b text-left">Gender</th>
                                <th className="py-3 px-6 border-b text-left">Discipline</th>
                            </tr>
                        </thead>
                        <tbody>
                                {filteredAthletes.length > 0 ? (
                                    filteredAthletes.slice(0, itemsPerPage).map((athlete) => (
                                        <tr key={athlete.code} className="hover:bg-gray-100">
                                            <td className="py-3 px-6 border-b">{athlete.name}</td>
                                            <td className="py-3 px-6 border-b">{athlete.country_long}</td>
                                            <td className="py-3 px-6 border-b">{athlete.gender}</td>
                                            <td className="py-3 px-6 border-b">{athlete.disciplines}</td>
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
};
=======
import React from 'react';
import Navbar from '../../components/NavBar';

const Athletes = () => {
    return (
        <div>
            <Navbar/>
        </div>
    );
}
>>>>>>> 210ee058423c3e4bf45b7710be865b7f785d4f7e

export default Athletes;
