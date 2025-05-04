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
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md py-6">
        <h1 className="text-3xl font-bold text-center">
          🎬 Projeto Tech - Últimos Vídeos
        </h1>
      </header>

      {/* Main */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <section>
          <h2 className="text-xl font-semibold mb-6 text-center">
            Nossos Destaques
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {videos.map((video) => (
              <div
                key={video.videoId}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition transform duration-200"
              >
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-md font-semibold mb-2">{video.title}</h3>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Assistir no YouTube
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Projeto Tech - Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
