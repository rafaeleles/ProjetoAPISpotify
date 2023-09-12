import { useState, useEffect } from 'react';
import axios from 'axios';
import './ArtistInfoPage.css'

function ArtistInfoPage() {
  const [artistData, setArtistData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://spotify23.p.rapidapi.com/artists/?ids=1w5Kfo2jwwIPruYS2UWh56';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ca929bc883msh0b9214e5e2528dfp143e09jsn9d2969c8aa09',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        },
      };

      try {
        const response = await axios.get(url, options);
        setArtistData(response.data.artists[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container"> 
      <h1>Informações do Artista</h1>
      {artistData && (
        <div>
          <h2>{artistData.name}</h2>
          {artistData.images && artistData.images.length > 0 ? (
            <img
              src={artistData.images[0].url}
              alt={`Imagem de ${artistData.name}`}
            />
          ) : (
            <p>Imagem não disponível</p>
          )}
          <p>Gêneros: {artistData.genres.join(', ')}</p>
          <p>Popularidade: {artistData.popularity}</p>
          {/* Outras informações do artista aqui */}
        </div>
      )}
    </div>
  );
}

export default ArtistInfoPage;
