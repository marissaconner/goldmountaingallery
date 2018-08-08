import React  from 'react';
    
  const GalleryEntry = ({ src, alt }) =>
    <div className='gmg-artist-gallery-thumbnail' data-toggle='modal' data-target='#gmg-gallery-modal'>  
      <img src={ 'img/artists/matt-downer/' + src }  className='img-responsive' alt = { alt } />
    </div>
 
  const CarouselEntry = ({ src, alt}) =>
    <div className="item">
      <img src = { 'img/artists/matt-downer/' + src } alt = { alt } />
    </div>

   
  const ArtistGallery = ({ artistData }) => 
    <div>
      <div className='row' id='gmg-artist-gallery'>
        <div className='col-xs-12 text-center'>
        
          {artistData.map(
            (galleryEntry, index) => 
              <GalleryEntry key = {index} {...galleryEntry}/>
          )}
          
        </div>
      </div>
      
      <div className='center-center-container' >      
        <div id='gmg-gallery-modal' className='modal fade' tabindex='-1' role='dialog'  aria-hidden='true'>
        
          <div className='vh-align-helper'>
            <div className='modal-dialog vh-align-center' >
              <div id='gmg-artist-carousel'   className='carousel slide carousel-fade'>
                
                <div className="carousel-inner">
                  <div className="item active">
                    <img src="img/artists/matt-downer/matt-downer-blue-mobile.jpg" alt="Los Angeles" />
                  </div>

                  {artistData.map(
                    (galleryEntry, index) =>
                      <CarouselEntry key = {index} {...galleryEntry} />
                  )}
                  
                </div>
       
                <a className="left carousel-control" href="#gmg-artist-carousel" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#gmg-artist-carousel" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
            
       
        </div>
      </div>
      
    </div>

export default ArtistGallery;
