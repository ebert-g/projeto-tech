const API_URL = 'http://localhost:8080/api/videos';

export async function getVideos() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Erro ao buscar videos ')
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar videos:', error);
        return [];
    }
}