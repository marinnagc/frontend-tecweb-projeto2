import { Link } from "react-router-dom";
import axios from "axios";
import "./index.css";

export default function Note(props) {
    const deleteNote = async () => {
        await axios.delete(`http://localhost:8000/api/notes/${props.id}/`);
        props.loadNotes();
        };
    return (
        <div className="card">
            <h3 className="card-title">{props.title}</h3>
            <Link to={`edit/${props.id}`}>✏️</Link>
            <div className="card-content">{props.children}</div>
            <button className="btn" onClick={deleteNote}>Excluir</button>
        </div>
    );
}