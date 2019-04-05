import React from "react";
import axios from "axios";
import Product_list from "./Components/Product_list";
import Cart from "./Components/Cart.jsx";

//  What we're looking for here is baisc insight into your familiarity with the React and Javascript
// and your general experience at writing code!
// TODO: import axios (if you prefer you can install, import and use a different request library)
// TODO: load and display product data from http://localhost:8080/api/products, eg. show product title, price, image
// TODO: implement a cart, the ability for users to add products to a cart section
// TODO: implement the ability to increment, decrement and remove items from the cart

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: null,
      cart: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/products")
      .then(res => {
        this.setState({ products: res.data });

        console.log(this.state.products);
      })
      .catch(err => {
        alert(err);
      });
  }

  addToCart(item) {
    const newItem = {
      item: item,
      quantity: 1
    };
    this.setState({
      cart: this.state.cart.concat(newItem)
    });
  }

  render() {
    const { products } = this.state;
    return (
      <main>
        {products !== null ? (
          <main className="app">
            <section>
              <p>this is the girl pic</p>
            </section>
            <section>
              <Product_list
                products={products}
                addToCart={item => this.addToCart(item)}
              />
            </section>
            <section>
              <p>this is the cart area</p>
            </section>
          </main>
        ) : (
          <section />
        )}
      </main>
    );
  }
}

export default App;
