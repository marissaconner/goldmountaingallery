const mattDowner = {
  _id: 1,
  firstName: "Matt",
  lastName: "Downer",
  bio: "<p>Bio Information</p><p>More Bio Information</p>",
  tagline: "Custom Woodwork And Fine Furniture",
  galleryItems: [
    {
      imgname: "bed",
      src: "matt-downer-bed.jpg",
      alt: "A bed"
    },
    {
      imgname: "bluemobile",
      src: "matt-downer-blue-mobile.jpg",
      alt: "A blue mobile"
    },
    {
      imgname: "chandelier",
      src: "matt-downer-chandelier.jpg",
      alt: "A chandelier"
    },
    {
      imgname: "sculpted-chairs",
      src: "matt-downer-cherry-sculpted-dining-chairs.jpg",
      alt: "Cherry-wood sculpted dining chairs"
    },
    {
      imgname: "drawers",
      src: "matt-downer-drawers.jpg",
      alt: "Custom set of drawers"
    },
    {
      imgname: "shelves",
      src: "matt-downer-shelving.jpg",
      alt: "Shelves"
    },
    {
      imgname: "lighting",
      src: "matt-downer-lighting.jpg",
      alt: "A chandelier with a rock accent"
    },
    {
      imgname: "table",
      src: "matt-downer-table.jpg",
      alt: "A table"
    },
    {
      imgname: "table-detail",
      src: "matt-downer-table-detail.jpg",
      alt: "A detail of metal accent on a wooden table"
    }
  ]
};

const artistData = {
  [mattDowner._id]: mattDowner
};

export default artistData;
