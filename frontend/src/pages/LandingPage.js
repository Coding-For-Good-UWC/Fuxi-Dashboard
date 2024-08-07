import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import classes from './LandingPage.module.css';
import * as FaIcons from "react-icons/fa"; 
import Man from '../assets/Man.png'
import { Accordion, AccordionItem, Divider } from '@nextui-org/react';

function LandingPage () 
{
    const navigate = useNavigate(); 

    const handleLogin = () => 
    {
        navigate("/login"); 
    }

    const handleDashboard = () => 
    {
        navigate("/dashboard");
    }

    const handleSongManagement = () => 
    {
        navigate("/song/management");
    }

    

    const handleSongUpload = () =>
    {
        navigate("/song/upload");
    }

    const handleUserManage = () =>
    {
        navigate("/user/manage");
    }

    const handleSongPreview = () =>
    {
        navigate("/song/preview");
    }

    const itemClasses = {
        base: "py-0 w-full text-left py-[10px] shadow-none border-none",
        title: "font-normal text-medium",
        trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
        indicator: "text-medium",
        content: "text-small  text-left" ,
      };

    return (
        <div className="flex flex-col pb-[100px]">
            <div className="flex flex-row items-center justify-center pr-[100px] pl-[100px]">
                <div className="flex flex-col w-1/2 h-4/5 items-start justify-center gap-0">
                    <h1 className="font-bold leading-[65px] mb-[30px]">Tapping into the power <br></br>of music for Persons<br></br> with Dementia</h1>
                    <h2 className="flex items-start text-left text-[20px] leading-[30px]">FUXI is an application made to assist Persons with <br></br>Dementia and those who care for them by tapping into the <br></br>power of music in improving wellbeing and engagement.</h2> 
                    <button onClick = {handleLogin} className="w-[300px] h-[70px] rounded-[10px] mt-[40px] bg-genreHindi shadow-black text-[20px] font-light text-white">Get Started</button>
                    
                </div>
                <div className="flex w-1/2 h-4/5 items-center justify-center">
                    <img className="flex items-center justify-center h-[600px]" src = {Man}></img>
                </div>
            </div>
            <div className="flex flex-col items-center px-[60px] pt-[100px]">
                <FaIcons.FaAngleDoubleDown></FaIcons.FaAngleDoubleDown>
                <h2>Scroll</h2>
                <h1 className='text-3xl pt-[60px]'>
                    FAQs
                </h1>
                <Accordion itemClasses={itemClasses} variant='light'>
                   
                    <AccordionItem className = "text-left border-none shadow-none" key="1" title = "What is Project FuXi?">
                    FUXI is an application made to assist Persons with Dementia and those who care for them by tapping into the power of music in improving wellbeing and engagement.
                    </AccordionItem>
                    <AccordionItem key="2" title = "Why Music Therapy?">
                    Research has demonstrated the effects of using familiar music as a way to increase brain activity and thereby improving alertness, ability to sustain conversation and physical and mental engagement in Persons with Dementia. The effect can be transformative and it can restore a sense of dignity for Persons with Dementia, while also providing relief for caregivers.

                    </AccordionItem>
                    <AccordionItem key = "3" title = "How Does Project FuXi Help?">
                    Finding and tracking this music can be additional work for caregivers. This is where FUXI can help. By using a wealth of knowledge developed over a 10 year collaboration between caregivers, healthcare providers, volunteers and Persons with Dementia, we have developed this free app to help support people anwhere at any time. The app will remember your preferences and the more you use the app the more effective it will become. Recommended music is catered especially towards Persons with Dementia, as it is based on a wealth of research from caregivers and healthcare providers.
                            
                    </AccordionItem>
                </Accordion>
           
            </div>
        </div>
    )
}

export default LandingPage; 
{/* <button onClick={handleLogin}>Login</button>
<button onClick = {handleDashboard}>Dashboard Page</button>
<button onClick = {handleSongManagement}>Manage Songs</button>
<button onClick = {handleSongPreview}>Preview Songs</button>
<button onClick = {handleSongUpload}>Upload Songs</button>
<button onClick = {handleUserManage}>Manage Users</button> */}