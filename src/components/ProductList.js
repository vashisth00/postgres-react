import React from "react";
import axios from "axios";
import Card from "./Card";
import "../App.css";

export default class ProductList extends React.Component {
  state = {
    products: [],
    order: "",
  };

  handleChane = (event) => {
    this.setState({ order: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const added = {
      order: this.state.order,
    };
    axios.post(`http://127.0.0.1:3001/products/orders/`, added).then((res) => {
      console.log(res);
      this.setState({ products: res.data });
    });
  };

  componentDidMount() {
    axios.get(`http://127.0.0.1:3001/products`).then((response) => {
      const products = response.data;
      this.setState({
        products,
      });
      console.log(products);
    });
  }

  render() {
    return (
      <div>
        <h1>Product List</h1>
        <ul className="display-flex">
          {this.state.products.data &&
            this.state.products.data.map((product) => (
              <h3>
                <Card
                  name={product.name}
                  price={product.initialPrice}
                  img={product.webUrl}
                >
                  {" "}
                </Card>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    order="order"
                    onChange={this.handleChane}
                  />
                  <button type="submit"> Add </button>
                </form>
              </h3>
            ))}
        </ul>
      </div>
    );
  }
}
