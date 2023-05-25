import React, { useEffect } from 'react';

function App() {
  useEffect(function () {
    const fetchAlbums = async function () {
      const albums = await fetch(
        'https://album-api.kindfield-8c0c0f4f.canadacentral.azurecontainerapps.io/albums'
      );
      console.log(await albums.json());
    };

    fetchAlbums();
  }, []);

  const value = 'Azure World';
  return <div>Hello {value}</div>;
}

export default App;
