import { useState, useEffect } from 'react';
import axios from 'axios';
import './TrackListPage.css'

function TrackListPage() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {

    const searchTracks = async () => {
      try {
        const response = await axios.get(
          `https://spotify23.p.rapidapi.com/tracks/?ids=5Xak5fmy089t0FYmh3VJiY`,
          {
            headers: {
              'X-RapidAPI-Key': 'ca929bc883msh0b9214e5e2528dfp143e09jsn9d2969c8aa09',
              'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            },
          }
        );
        setTracks(response.data.tracks);
      } catch (error) {
        console.error(error);
      }
    };

    // Chama a função de busca quando o componente montar
    searchTracks();
  }, []);

  return (
    <div className="container"> 
      <h1>Lista de Faixas</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <h2>{track.name}</h2>
            <p>Artista: {track.artists[0].name}</p>
            <p>Álbum: {track.album.name}</p>
            <p>Ano de Lançamento: {track.album.release_date}</p>
            {/* Outras informações da faixa */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrackListPage;
