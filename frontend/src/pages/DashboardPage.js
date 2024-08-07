import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
    const navigate = useNavigate();

    const songDetails = () => {
        navigate("/song/management");
    }

    const [categories, setCategories] = useState({});

    const getCategoriesData = async () => {
        const response = await fetch("http://localhost:3001/dashboard/categories");
        const data = await response.json();

        if (data.status === "ERROR") {
            alert(data.message);
            return;
        }

        setCategories(data.categories);
    }

    useEffect(() => {
        getCategoriesData();
    }, []);

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-5xl font-medium">Song Categories</h1>
            <div className="grid grid-cols-3 gap-6 px-5 mt-10">
                {Object.keys(categories).length > 0 && categories.map((category, index) => (
                    <div onClick={songDetails} className="flex flex-col items-center bg-secondary h-40 w-72 rounded-lg cursor-pointer" key={index}>
                        <div className="flex flex-row items-center justify-center w-full h-12 text-center px-2 gap-3 pt-12">
                            <h2 className="text-2xl font-normal text-teal-500">{category.categoryName}</h2>
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: category.colour }} />
                        </div>
                        <h3 className="text-gray-500 mt-3 text-lg">{category.numberSongs} Songs</h3>
                    </div>
                ))}
                <div className="flex flex-col items-center justify-center bg-secondary h-40 w-72 rounded-lg text-5xl">
                    +
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
