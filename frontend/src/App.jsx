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
    <div className="bg-dark text-white min-vh-100">
      <header className="bg-black py-4 shadow ">
        <h1 className="text-center fw-bold display-6">
          Projeto Tech
        </h1>
      </header>

      <main className="container mt-5 text-center">
        <p>Conteúdo principal</p>
      </main>

      <footer className="bg-black text-center text-white py-3 mt-auto">
        <p className="mb-1">Desenvolvido por Ebert Guerreiro</p>
        <a href="https://www.linkedin.com/in/ebertguerreiro"
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none text-light mx-2 ">
          <i className="bi bi-linkedin"></i>LinkedIn
        </a>
        <a href="https://github.com/ebert-g"
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none text-light mx-2">
          <i className="bi bi-github"></i> GitHub
        </a>



      </footer>
    </div>
  );
}

export default App;
