import { useState } from "react";
import { FaBars, FaHeart, FaCog, FaBook, FaSearch, FaDoorClosed, FaBoxOpen, FaPlay, FaSave, FaFile, FaHome, FaQuestion,  } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import JournalPage from "../components/JournalPage.jsx";
import SettingPage from "../components/SettingPage.jsx";
import StatusPage from "../components/StatusPage.jsx";
import SuppliesPage from "../components/SuppliesPage.jsx";
import { storyNodes } from "../utils/StoryNodes.jsx";
import '../styles/Chapters.css';
function Chapters(){

    const [currentNodeId, setCurrentNodeId] = useState("chapter_1");
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    const currentNode = storyNodes[currentNodeId];

    function Menu(){
        setMenuIsVisible(prev => !prev)
    }

    return(
        <>
            <nav className="navbar">
                <div className="nav-left">
                    <FaBars onClick={() => Menu()} />
                        <div className={`menuContent ${menuIsVisible ? "open" : "closed"}`}>
                            <span>Survivor Menu</span>
                            <button className="resume" onClick={() => Menu()}><FaPlay />Resume</button>
                            <button><FaSave />Save Progress</button>
                            <button><FaFile />Load Progress</button>
                            <button><FaHome />Main Menu</button>
                            <button><IoMdClose />Exit</button>
                        </div>
                    <span>CHAPTER {currentNode.metadata.chapter}</span>
                </div>
                <div className="nav-center">
                     DAY {currentNode.metadata.day}
                </div>
                <div className="nav-right">
                    <FaHeart /> 
                    <StatusPage />

                    <FaBook /> 
                    <JournalPage />

                    <FaBoxOpen />
                    <SuppliesPage />

                    <FaCog />
                    <SettingPage />
                </div>
            </nav>

            <div className="chapter-body">
                <div className="chapter-text">
                    {currentNode.content.map((item, index) => (
                        <p key={index}>{item.text}</p>
                    ))}
                </div>

            <div className="pages-divider"><span>◆</span></div>
                <div className="choices">
                    {
                        currentNode.choices.map((choice) => (
                            <button className="choice"
                            key={choice.id}
                            onClick={() => setCurrentNodeId(choice.next)}>
                                <div className="choice-left">
                                    <FaSearch className="icon"/>
                                    <span>{choice.text}</span>
                                </div>
                                <span className="choice-arrow">&gt;</span>
                            </button>
                        ))
                    }
                </div>
            </div>
        </>
    )

}

export default Chapters;