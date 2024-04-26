export default function Editar() {
    return (
        <div className="App">
            <main className="container">
                <form className="form-card">
                    <input
                        className="form-card-title"
                        type="text"
                        name="titulo"
                    />
                    <textarea
                        className="autoresize"
                        name="detalhes"
                    ></textarea>
                    <button className="btn" type="submit">Criar</button>
                </form>
            </main >
        </div>
    );
}