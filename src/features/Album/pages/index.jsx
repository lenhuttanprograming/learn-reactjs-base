import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'Nhạc Việt lâu phai',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg',
    },
    {
      id: 2,
      name: 'Cảm nhận sự yên bình',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/e/f/0/4ef0ab0af9a4b2866bb3f006db5386db.jpg',
    },
    {
      id: 3,
      name: 'Âm thanh lofi',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/3/c/8/53c8e5053f0ec4b5a2bed26c37a27c73.jpg',
    },
  ];
  return (
    <div>
      <h2>Bạn có thể thích đấy</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
