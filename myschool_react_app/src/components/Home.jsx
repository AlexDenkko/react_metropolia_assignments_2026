import {useState} from 'react';
import MediaRow from './MediaRow';
import SingleView from './SingleView';

const Home = () => {
  const mediaArray = [
    {
      media_id: 8,
      filename: 'https://placehold.co/800?text=Pic1',
      thumbnail: 'https://placehold.co/200?text=Thumb1',
      filesize: 170469,
      media_type: 'image/jpeg',
      title: 'Picture 1',
      description: 'This is a placeholder picture.',
      created_at: '2024-01-07T20:49:34.000Z',
    },
    {
      media_id: 9,
      filename: 'https://placehold.co/800?text=Pic2',
      thumbnail: 'https://placehold.co/200?text=Thumb2',
      filesize: 1002912,
      media_type: 'image/png',
      title: 'Picture 2',
      description: 'Another placeholder picture.',
      created_at: '2024-01-07T21:32:27.000Z',
    },
    {
      media_id: 17,
      filename: 'https://example.com/video.mp4',
      thumbnail: 'https://placehold.co/200?text=Video',
      filesize: 1236616,
      media_type: 'video/mp4',
      title: 'Video 1',
      description: 'Placeholder video.',
      created_at: '2024-01-07T20:48:13.000Z',
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <h2>My Media</h2>

      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created at</th>
            <th>Filesize</th>
            <th>Media type</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>

      {selectedItem && (
        <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
      )}
    </>
  );
};

export default Home;
