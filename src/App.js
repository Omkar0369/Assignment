import React, { useState } from 'react';
import PhotoForm from './components/PhotoForm';
import PhotoCard from './components/PhotoCard';
import { v4 as uuidv4 } from 'uuid';
import './styles.css';
function App() {
  const [photos, setPhotos] = useState([]);

  const addPhoto = (photo) => {
    setPhotos([...photos, { id: uuidv4(), ...photo }]);
  };



  return (
    <div className="app">
      <PhotoForm addPhoto={addPhoto}/>
      <div className='photo-gallery'>
        
        {
          photos.map(
            (photo)=>(
              <PhotoCard
                key={photo.id}
                photo={photo.photo}
                description={photo.description}
              />
            )
          )
        }

      </div>

    </div>
  );
}

export default App;
