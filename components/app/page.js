'use client'
import { useEffect, useState } from "react";
import { GiMusicSpell } from "react-icons/gi";
import { CgMenuRound } from "react-icons/cg";
import { HiHomeModern } from "react-icons/hi2";
import { FaPeoplePulling } from "react-icons/fa6";
import { MdOutlineShareLocation } from "react-icons/md";
import { PiGooglePhotosLogoFill } from "react-icons/pi";
import PropTypes from "prop-types";
import { fetchData } from "../data/firebase";
import Page1 from "../page1/page";
import Page2 from "../page2/page";
import Page3 from "../page3/page";
import Page4 from "../page4/page";
import Page5 from "../page5/page";
import Page6 from "../page6/page";
import Page7 from "../page7/page";
import Page8 from "../page8/page";
import Page9 from "../page9/page";



export default function App({id, name}) {
    const [isHidden, setIsHidden] = useState(true)
    const [bgToggle, setBgTogle] = useState('bg-black')
    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)

    


    const toggleMusic = () => {
        const audio = document.getElementById('music');
        if (audio.paused) {
          audio.play();
          setBgTogle('bg-black')
        } else {
          audio.pause();
          setBgTogle('bg-red-600')
        }
      };
    const btnElement = () => {
        toggleMusic()
        setIsHidden(false)
        document.body.style.overflow = 'auto'
        setTimeout(() => {
            const selectId = document.getElementById('page2');
      
            if (selectId) {
              selectId.scrollIntoView({ behavior: 'smooth' });  // Scroll setelah delay
            }
          }, 100); 
    }
    const btnbar = (page) => {
        setTimeout(() => {
            const selectId = document.getElementById(`${page}`);
      
            if (selectId) {
              selectId.scrollIntoView({ behavior: 'smooth' });  // Scroll setelah delay
            }
          }, 100); 
    }
    const navbar = () => setOpen(!open)
    useEffect(() => {
        window.scrollTo(0,0)

        const handleResize = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`)
        }
        handleResize()
            if(isHidden){
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = 'auto'
            }
            
        return() => {
            document.body.style.overflow = '';
        }
    },[isHidden])

    useEffect(() => {
        const getData = async () => {
            const data = await fetchData(id)
            setData(data)
        }
        getData()

    },[])
    console.log(data);
    
    return( data ?
        (<section className="sm:px-20 relative">
            <Page1 id={id} btn={btnElement}  data={data} name={name} />
            <div id="page2">
                <Page2 id={id} data={data} />
            </div>
            <div id="page3">
                <Page3 id={id} data={data} />
            </div>
            <div id="page4">
                <Page4 id={id} data={data} />
            </div>
            <Page5 data={data} />
            <Page6 id={id} data={data} />
            <Page7 id={id} />
            <Page8 id={id} data={data} />
            <div id="page9">
                <Page9 id={id} data={data} />
            </div>
            <button onClick={toggleMusic} 
                className={`w-10 h-10 rounded-full border border-white flex justify-center items-center bg-opacity-50 fixed bottom-16 left-5 sm:left-20 z-20 ${bgToggle}`}>
                    <GiMusicSpell className='fill-current text-white rotate-icon' size={25} />
            </button>
            <audio id="music">
                <source src='/melodi.mp3' type="audio/mp3" />
            </audio>
            <button 
                onClick={navbar}
                className="w-10 h-10 rounded-full border border-white flex justify-center items-center bg-black bg-opacity-50 fixed bottom-5 sm:bottom-16 sm:left-36 left-5  z-20 ">
                <CgMenuRound className='fill-current text-white ' size={25} />
            </button>
            {/* {open ? ( */}
            <div className={`flex justify-around fixed bottom-5 w-52 left-20 sm:left-48 sm:bottom-16 transition-transform transform-gpu translate-x-full  ${open ? 'animate-slide-in z-20 ': 'animate-slide-out z-10' }`} >
                <button 
                    disabled={open ? false: true}
                    onClick={() => btnbar('page2')}
                    className="w-9 h-9 rounded-full border border-white flex justify-center items-center bg-black bg-opacity-70  ">
                    <HiHomeModern className='fill-current text-white ' size={20} />
                </button>
                <button 
                    disabled={open ? false: true}
                    onClick={() => btnbar('page3')}
                    className="w-9 h-9 rounded-full border border-white flex justify-center items-center bg-black bg-opacity-70  ">
                    <FaPeoplePulling className='fill-current text-white ' size={20} />
                </button>
                <button 
                    disabled={open ? false: true}
                    onClick={() => btnbar('page4')}
                    className="w-9 h-9 rounded-full border border-white flex justify-center items-center bg-black bg-opacity-70  ">
                    <MdOutlineShareLocation className='fill-current text-white ' size={20} />
                </button>
                <button 
                    disabled={open ? false: true}
                    onClick={() => btnbar('page9')}
                    className="w-9 h-9 rounded-full border border-white flex justify-center items-center bg-black bg-opacity-70  ">
                    <PiGooglePhotosLogoFill className='fill-current text-white ' size={20} />
                </button>
            </div>
            {/* null} */}
        </section>) 
        : (
            <h1>ID tidak ada</h1>
        )
    )
}
App.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string
}