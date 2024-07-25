import "../assets/styles/Navbar.css";

export default function Navbar() {


    return (
        <div className="Navbar--Container">
            <img src="https://static.thenounproject.com/png/105260-200.png" alt="" className="Navbar--Logo" />
            <h1 className="Navbar--Title">Meme Generator</h1>
            <span className="Navbar--Project">React Course - Project 3</span>
        </div>
    )
}