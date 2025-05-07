import { useEffect, useState } from "react";

function App() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/videos")
            .then((res) => res.json())
            .then((data) => setVideos(data))
            .catch((err) => console.error("Erro ao buscar vídeos:", err));
    }, []);

    return (
        <div className="bg-dark text-white min-vh-100 d-flex flex-column">
            {/* HEADER */}
            <header className="bg-black py-4 shadow">
                <h1 className="text-center fw-bold display-6">Projeto Tech</h1>
            </header>

            {/* MAIN */}
            <main className="container my-5 flex-grow-1">
                <section>
                    <h2 className="text-white mb-4 text-center">
                        🎥 Últimos Vídeos
                    </h2>
                    <div
                        className="d-flex overflow-auto gap-4 pb-3 px-2"
                        style={{ whiteSpace: "nowrap" }}
                    >
                        {videos.map((video) => (
                            <div
                                key={video.videoId}
                                className="card bg-secondary text-white shadow-sm"
                                style={{ minWidth: "220px", flex: "0 0 auto" }}
                            >
                                <img
                                    src={video.thumbnailUrl}
                                    className="card-img-top"
                                    alt={video.title}
                                    style={{ height: "120px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h6 className="card-title">{video.title}</h6>
                                    <a
                                        href={`https://www.youtube.com/watch?v=${video.videoId}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline-light btn-sm mt-2"
                                    >
                                        Assistir
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* FOOTER */}
            <footer className="bg-black text-center text-white py-3">
                <p className="mb-1">Desenvolvido por Ebert Guerreiro</p>
                <a
                    href="https://www.linkedin.com/in/ebertguerreiro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light mx-2"
                >
                    <i className="bi bi-linkedin me-1"></i>LinkedIn
                </a>
                <a
                    href="https://github.com/ebert-g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light mx-2"
                >
                    <i className="bi bi-github me-1"></i>GitHub
                </a>
            </footer>
        </div>
    );
}

export default App;
