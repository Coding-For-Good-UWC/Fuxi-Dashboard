import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import classes from './DashboardPage.module.css'


function DashboardPage()
{
    const navigate = useNavigate();

    const [categories, setCategories] = useState({})

    const getCategoriesData = async () => {
        const response = await fetch("http://localhost:3001/dashboard/categories");
        const data = await response.json();
        console.log(data)

        if (data.status === "ERROR") {
            alert(data.message);
            return;
        }

        setCategories(data.categories)
    }

    useEffect(() => 
    {
        getCategoriesData(); 
    }, []); 

    

    return (
        <div className = {classes.container}>
            <h1 className = {classes.SongCategoriesText}>Song Categories</h1>
            <div className = {classes.grid}>
                { Object.keys(categories).length > 0 && categories.map((category, index) => 
                    <div className={classes.categories} key={index}>
                        <h2>{category.categoryName}</h2>
                        {/* <h3>{category.colour}</h3> */}
                        <div className = {classes.tags} style={{ backgroundColor: category.colour }} />
                    
                    </div>
                )}
            <h2 className = {classes.newCategory}>+</h2>
            </div>
        </div>

    );
}



export default DashboardPage;

