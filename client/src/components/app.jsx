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
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios
      .get("/related")
      .then((results) => {
        this.setState({
          products: results.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {

    const settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />
    };
    return (
      <div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {this.state.products.map((product, index) => (
            <ItemList product={product} index={index} key={index} />
          ))}
        </Slider>
      </div>
    );
  }
}

module.exports = App;