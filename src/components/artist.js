import React from 'react'
import ArtistGallery from './artistgallery.js';

const Artist = ({artistData}) => 
    <article>
    <div className='container-fluid'>
      <div className='row'>
        <div id='gmg-artist-heading' style={{ 'backgroundImage' : 'url("img/artists/matt-downer/matt-downer-banner.jpg")' }}>
          <h1 id='gmg-artist-name'>Matt Downer</h1>
          <span id='gmg-artist-tagline'>Custom Woodwork And Fine Furniture</span>
        </div>
      </div>
    </div>
      
    <div className='container'>
       <section>
        <div className='row'>
          <div className='col-md-12'>
            <h2 className='text-center'>About Matt</h2>

            <img id='gmg-artist-portrait' className='col-md-5 col-sm-12 pull-left img-responsive' src='img/artists/matt-downer/matt-downer-portrait.jpg' alt='Firstname Lastname' />
                      
            <p>
            Matt Downer's work begs to be touched with its bold allure, hand-crafted contours, and nuanced detail that belies a lifetime of experience and craftsmanship. Ever since he was a kid making sketchy skateboard ramps and catapults, Matt has been fascinated with creating things that work.
            </p>
            
            <p>
            Raised in Manhattan Beach, California, Matt graduated from CSU Chico with a Bachelors of Art in Philosophy and Religious Studies.  Soon after, he loaded his volkswagen to wander the west and landed in Telluride, Colorado, where he found and honed his skills at Steeprock Joinery.  Freed from the cramped cells that California apartments used to quarter him in, he finally was able to stretch out his wood lathe in the vibrant and verdant Rockies.  His contemporaries, like Christoph Neander, inspired him with museum-quality work to nuture an appreciation of his hand-made pieces by valuing the finest of details and every nuance of close inspection.
            </p>
            
            <p>One of the great pleasures of working with wood is its the rich tactility.  &ldquo;My hope is that every one of my clients will caress each piece I&rsquo;ve made for them on a regular basis,&rdquo; Matt says. &ldquo;By feeling the curves and sensing the flow of the grain, the piece stands apart from a world full of objects spat out by some machine on the other side of the planet. Painstakingly crafted by attentive eyes and practiced hands, every surface of every piece I make is worked so as to bring life back to the wood that once grew as a beautiful tree.&rdquo;
            </p>
            
            <p>
            Curved pieces with exposed joinery, pegged through-tenons, and artful dovetails compose a theme throughout Matt&rsquo;s designs, rendering each work unique not only to itself but to none other than Downer himself. Cherry, Maple and Black Walnut are his most popular materials, but any wood with the potential to enhance a custom-made piece may find itself in his hands, as well as metal, glass, stone and inlays of copper and silver.
            </p>   
          </div>
        </div>
      </section>
      
      <section>
        <h2 className='text-center'>Gallery</h2>
        <ArtistGallery artistData={artistData} />
      </section>
      
    </div>
  </article>

export default Artist