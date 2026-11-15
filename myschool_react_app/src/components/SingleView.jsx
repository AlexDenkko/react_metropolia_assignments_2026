import PropTypes from 'prop-types';

const SingleView = ({item, setSelectedItem}) => {
  return (
    <dialog open={Boolean(item)} className="single-view">
      <button className="close-button" onClick={() => setSelectedItem(null)}>
        Close
      </button>

      <h2>{item.title}</h2>

      <p>{item.description}</p>

      {item.media_type.startsWith('image/') && (
        <img src={item.filename} alt={item.title} />
      )}

      {item.media_type.startsWith('video/') && (
        <video src={item.filename} controls />
      )}
    </dialog>
  );
};

SingleView.propTypes = {
  item: PropTypes.object.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};

export default SingleView;
