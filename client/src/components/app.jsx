import React from 'react';
import axios from 'axios';
import ItemList from './ItemList.jsx';
import Slider from 'react-slick';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", height: "45px", width: "30px" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", height: "45px", width: "30px" }}
      onClick={onClick}
    />
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      numOfItems: Math.random() * (20 - 12) + 12,
      startingPoint: 0
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    var randomInt = Math.floor(Math.random() * 10000000);
    axios
      .get(`http://localhost:8090/related/pg/${randomInt}`)
      .then((results) => {
        this.setState({
          products: results.data,
        });
      })
      .catch((err) => {
        console.error(err);
      })
  }

  render() {

    const settings = {
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />
    };
    return (
      <div className="related-items">
      <div className="related-comp">
        <div className="related-title">
          GET THE FULL LOOK

        </div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {this.state.products.slice(this.state.startingPoint, this.state.startingPoint + this.state.numOfItems).map((product, index) => (
            <ItemList product={product} index={index} key={index} />
          ))}
        </Slider>
      </div>
      </div>
    );
  }
}

module.exports = App;