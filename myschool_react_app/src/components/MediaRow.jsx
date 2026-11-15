import PropTypes from 'prop-types';

const MediaRow = ({item, selectedItem, setSelectedItem}) => {
  return (
    <tr>
      <td>
        <img src={item.thumbnail} alt={item.title} width="100" />
      </td>

      <td>{item.title}</td>

      <td>{item.description}</td>

      <td>{item.created_at}</td>

      <td>{item.filesize}</td>

      <td>{item.media_type}</td>

      <td>
        <button
          onClick={() => setSelectedItem(item)}
          aria-pressed={selectedItem?.media_id === item.media_id}
        >
          View
        </button>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
  selectedItem: PropTypes.object,
  setSelectedItem: PropTypes.func.isRequired,
};

export default MediaRow;
