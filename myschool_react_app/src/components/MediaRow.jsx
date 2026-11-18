import {Link} from 'react-router';
import PropTypes from 'prop-types';

const MediaRow = ({item}) => {
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
        <Link to="/single" state={item}>
          Show
        </Link>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MediaRow;
