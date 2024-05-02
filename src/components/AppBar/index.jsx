import "./index.css";
import logo from "./logo2.png";

export default function AppBar() {
    return (
        <div className="appbar">
            <img src={logo} className="logo" />
            <a href='/' className="subtitle">BEST PLAYS!</a>
            <a href="/favoritos" className="favoritos">Videos favoritados</a>
        </div>
    );
}