import React  from 'react';
    
  const GalleryEntry = ({ src, alt }) =>
    <div className='gmg-artist-gallery-thumbnail' data-toggle='modal' data-target='#gmg-gallery-modal'>  
      <img src={ 'img/artists/matt-downer' + src }  className='img-responsive' alt = { alt } />
    </div>
 
   
  const ArtistGallery = ({ artistData }) => 
    <div className='row' id='gmg-artist-gallery'>
      <div className='col-xs-12 text-center'>
      
        {artistData.map(
          (galleryEntry, index) => 
            <GalleryEntry key = {index} {...galleryEntry}/>
        )}
        
      </div>
    </div>

export default ArtistGallery;
