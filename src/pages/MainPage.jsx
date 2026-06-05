import { useNavigate } from "react-router-dom";

import "../styles/MainPage.css";
function MainPage(){
    
    const navigate = useNavigate();

    return(
        <>
        <div className="overlay">
            <div className="menu">
                <h2 className="short-intro">A CHOOSE YOUR OWN ADVENTURE</h2>
                <h1 className="title">Until<br/>Tommorrow</h1>
                <div className="divider"><span>◆</span></div>
                <h2 className="long-intro">The world didn't end in a single day. <br/>It ended <span>one decision</span> at a time.</h2>
                <button className="new-game" onClick={() => navigate("/Chapters")}>NEW GAME <span>&gt;</span></button>
                <button className="continue">CONTINUE <span>&gt;</span></button>
            </div>
        </div>
        <footer>Version 0.0.1</footer>
        </>
    )
}

export default MainPage