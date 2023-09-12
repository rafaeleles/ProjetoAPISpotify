import { useState, useEffect } from 'react';
import axios from 'axios';

const SpotifyArtistDetails = () => {
  const [artistData, setArtistData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://spotify23.p.rapidapi.com/artists/?ids=6TIYQ3jFPwQSRmorSezPxX',
          {
            headers: {
              'X-RapidAPI-Key': '67f4cdc45cmsh7e33370ade6401ep1dda4ajsn2666f78dc588',
              'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
            },
          }
        );
        const data = response.data;

        // Verifique se a resposta contém dados do artista
        if (data && data.artists && data.artists.length > 0) {
          setArtistData(data.artists[0]); // Supondo que a resposta é uma lista de artistas
        } else {
          console.error('Nenhum dado de artista encontrado na resposta da API.');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {artistData ? (
        <div>
          <h2>Informações do Artista</h2>
          <p>Nome: {artistData.name}</p>
          <p>Gênero: {artistData.genres.join(', ')}</p>
          <p>Popularidade: {artistData.popularity}</p>
          <p>Seguidores: {artistData.followers.total}</p>
          <p>Link do Spotify: <a href={artistData.external_urls.spotify} target="_blank" rel="noopener noreferrer">Abrir no Spotify</a></p>
          <h3>Imagens</h3>
          {artistData.images.map((image, index) => (
            <img key={index} src={image.url} alt={`Imagem ${index}`} />
          ))}
          {/* Adicione mais informações conforme necessário */}
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default SpotifyArtistDetails;
