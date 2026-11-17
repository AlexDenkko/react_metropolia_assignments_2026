import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  // Haetaan MediaRow-komponentista lähetetty mediaobjekti
  const {state: item} = useLocation();

  // Otetaan käyttöön navigointi
  const navigate = useNavigate();

  // Jos mediaa ei ole valittu
  if (!item) {
    return (
      <div>
        <h1>No media selected</h1>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{item.title}</h1>

      <p>{item.description}</p>

      <p>Filename: {item.filename}</p>

      <p>Media type: {item.media_type}</p>

      <p>File size: {item.filesize}</p>

      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Single;
