import React from 'react';

class ItemList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 10,
      }
    };
  }


  render() {
    return (
        <div className="carousel-slide">
          {(this.props.product.name, this.props.product.price)}
          <img src={this.props.product.link}></img>
        </div>
    );
  }
}

module.exports = ItemList;