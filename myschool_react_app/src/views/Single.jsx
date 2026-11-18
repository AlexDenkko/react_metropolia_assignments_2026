import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  // Haetaan mediadata, joka lähetettiin MediaRow-komponentista
  const {state: item} = useLocation();

  // Mahdollistaa siirtymisen takaisin
  const navigate = useNavigate();

  // Tarkistetaan, onko media valittu
  if (!item) {
    return (
      <div>
        <h2>No media selected</h2>

        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }

  return (
    <div className="single-view">
      <button className="close-button" onClick={() => navigate('/')}>
        Back to Home
      </button>

      <h2>{item.title}</h2>

      <p>{item.description}</p>

      {item.media_type.startsWith('image/') && (
        <img src={item.filename} alt={item.title} />
      )}

      {item.media_type.startsWith('video/') && (
        <video src={item.filename} controls />
      )}
    </div>
  );
};

export default Single;
