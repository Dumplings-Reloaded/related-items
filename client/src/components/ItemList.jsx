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
        <img src={this.props.product.link}></img>
        {this.props.product.name} -&nbsp; {this.props.product.cat}
        <br></br>
        <br></br>

        <div className="product-price">${this.props.product.price}</div>
      </div>
    );
  }
}

module.exports = ItemList;