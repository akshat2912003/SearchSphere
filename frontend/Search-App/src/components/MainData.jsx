import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './loader.css';
import Mcq from '../Page/Mcq';
import Alagram from '../Page/Alagram';
import Other from '../Page/Other';

const ITEMS_PER_PAGE = 6; 

const MainData = ({ que, quantity }) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (quantity != 0) {
            if (que) {
                getData(que, quantity);
            }
        }
    }, [que, quantity]);

    async function getData(searchQuery, quantity1) {
        setLoading(true);
        const res = await axios.post('https://searchsphere.onrender.com', {
            query: searchQuery,
            limit1: quantity1,
        });
        setData(res.data.data);
        console.log(res.data.data);
        setLoading(false);
    }

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedData = data.slice(startIndex, endIndex);

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div className="w-full min-h-[85%] bg-white flex flex-col items-center mb-[40px]">
            {loading && <span className="loader"></span>}
            {data.length > 0 ? (
                paginatedData.map((item, index) => {
                    if (item.type === 'MCQ') {
                        return (
                            <Mcq
                                key={index}
                                type={item.type}
                                title={item.title}
                                solution={item.solution}
                                number={startIndex + index}
                                options={item.options}
                            />
                        );
                    } else if (item.type === 'ANAGRAM') {
                        return (
                            <Alagram
                                key={index}
                                type={item.type}
                                title={item.title}
                                solution={item.solution}
                                number={startIndex + index}
                                blocks={item.blocks}
                            />
                        );
                    } else {
                        return (
                            <Other
                                key={index}
                                type={item.type}
                                title={item.title}
                                solution={item.solution}
                                number={startIndex + index}
                            />
                        );
                    }
                })
            ) : (
                <p>No results found.</p>
            )}
            {data.length > ITEMS_PER_PAGE && (
                <div className="w-full flex justify-center gap-4 mt-4">
                    <button onClick={handlePreviousPage} disabled={currentPage === 1} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50">Prev</button>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50" >Next</button>
                </div>
            )}
        </div>
    );
};

export default MainData;
