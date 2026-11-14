import PropTypes from 'prop-types';

const MediaRow = ({item}) => {
  return (
    <tr>
      <td>
        <img src={item.thumbnail} alt={item.title} with="100" />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.created_at}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MediaRow;
