import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import classes from './DashboardPage.module.css'


function DashboardPage()
{
    const navigate = useNavigate();

    const songDetails = () => {
        navigate("/song/management")
    }

    const [categories, setCategories] = useState({})

    const getCategoriesData = async () => {
        const response = await fetch("http://localhost:3001/dashboard/categories");
        const data = await response.json();
        // console.log(data)

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
            <h1 className = {classes.songCategoriesText}>Song Categories</h1>
            <div className = {classes.grid}>
                { Object.keys(categories).length > 0 && categories.map((category, index) => 
                    <div onClick = {songDetails}className={classes.categories} key={index}>
                        <div className = {classes.categoryAndTag}>
                            <h2 className = {classes.categoryName}>{category.categoryName}</h2>
                            <div className = {classes.tags} style={{ backgroundColor: category.colour }} />
                        </div>
                        <h3 className = {classes.numberSongs}>{category.numberSongs} Songs</h3>
                    
                    </div>
                )}
            <div className = {classes.newCategory}>+</div>
            </div>
        </div>

    );
}



export default DashboardPage;

