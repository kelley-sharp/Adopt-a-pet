import React from 'react';

class Carousel extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      photos: [],
      active: 0
    }
    static getDerivedStateFromProps({ media }) {
      let photos = [];

      if (media && media.photos && media.photos.photo) {
        photos = media.photos.photo.filter(photo => photo['@size'] === 'pn')
      }

      return { photos };
    }
  }
  render(){
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src="{photos[active].value}" alt="primary-animal"/>
        <div className="carousel-smaller">{photos.map((photo, index) => (
          
        ))}
        </div>
      </div>;
  }
}

export default Carousel;