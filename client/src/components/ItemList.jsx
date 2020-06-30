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
        <img className="carousel-link" src={this.props.product.link}></img>
        <div className="carousel-name">{this.props.product.name} -</div>
        <div className="carousel-cat">{this.props.product.cat}</div>
        <br></br>

        <div className="carousel-price">${this.props.product.price}</div>
      </div>
    );
  }
}

module.exports = ItemList;