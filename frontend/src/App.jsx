import { useEffect, useState } from "react";
import { getVideos } from "./services/videoService";
function App() {
  const {videos, setVideos} = useState([]);
  
  return (
    <div>
      <h1>Projeto Tech - Youtube API</h1>
    </div>
  );
}

export default App
