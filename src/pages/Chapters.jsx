import { FaBars, FaHeart, FaCog, FaBook } from "react-icons/fa";
import '../styles/Chapters.css';
function Chapters(){

    return(
        <>
            <nav className="navbar">
                <div className="nav-left">
                    <FaBars />
                </div>
                <div className="nav-center">
                    Chapter 1
                </div>
                <div className="nav-right">
                    <FaHeart /> 
                    <FaBook /> 
                    <FaCog /> 
                </div>
            </nav>

            <div className="chapter-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem a dicta dolorum eveniet, exercitationem esse, architecto eligendi magnam reiciendis facilis mollitia odit laborum tempore. Repellendus nihil non animi quia debitis.
            </div>
        </>
    )

}

export default Chapters;