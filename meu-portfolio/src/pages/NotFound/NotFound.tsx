import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Página não encontrada</h2>
        <p className="not-found-message">
          Parece que você seguiu um link quebrado ou digitou uma URL que não existe neste site.
        </p>
        <Link to="/" className="not-found-button">
          Voltar ao início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
