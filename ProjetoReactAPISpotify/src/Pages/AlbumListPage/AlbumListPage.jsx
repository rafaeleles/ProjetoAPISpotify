import { useState, useEffect } from 'react';
import axios from 'axios';
import './AlbumListPage.css'

function AlbumListPage() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // Função para buscar os álbuns
    const searchAlbums = async () => {
      try {
        const response = await axios.get(
          `https://spotify23.p.rapidapi.com/albums/?ids=5B4PYA7wNN4WdEXdIJu58a`,
          {
            headers: {
              'X-RapidAPI-Key': 'ca929bc883msh0b9214e5e2528dfp143e09jsn9d2969c8aa09',
              'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            },
          }
        );
        setAlbums(response.data.albums);
      } catch (error) {
        console.error(error);
      }
    };

    // Chama a função de busca quando o componente montar
    searchAlbums();
  }, []); // O array vazio assegura que isso só é executado uma vez no montagem do componente

  return (
    <div className="container">
    <h1>Lista de Álbuns</h1>
    <ul>
      {albums.map((album) => (
        <li key={album.id}>
          <h2>{album.name}</h2>
          <p>Artista: {album.artist}</p>
          <p>Ano de Lançamento: {album.releaseYear}</p>
          {/* Exibir a imagem do álbum */}
          {album.images && album.images.length > 0 && (
            <img src={album.images[0].url} alt={`Capa do álbum ${album.name}`} />
          )}
        </li>
      ))}
    </ul>
  </div>
);
}

export default AlbumListPage;
