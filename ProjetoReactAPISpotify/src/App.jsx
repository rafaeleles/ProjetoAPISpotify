import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ArtistInfoPage from './Pages/ArtistInfoPage/ArtistInfoPage';
import AlbumListPage from './Pages/AlbumListPage/AlbumListPage';
import TrackListPage from './Pages/TrackListPage/TrackListPage';
import './App.css'; // Importe o arquivo CSS

function App() {
  return (
    <Router>
      <nav className="navbar"> {/* Adicione a classe navbar aqui */}
        <ul>
          <li>
            <Link to="/artists">Pesquisar Artistas</Link>
          </li>
          <li>
            <Link to="/albums">Listar Álbuns</Link>
          </li>
          <li>
            <Link to="/tracks">Listar Faixas</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/artists" component={ArtistInfoPage} />
        <Route path="/albums" component={AlbumListPage} />
        <Route path="/tracks" component={TrackListPage} />
      </Switch>
    </Router>
  );
}

export default App;
