import React from "react";
import axios from "axios";
import Product_list from "./Components/Product_list";
import Cart from "./Components/Cart";

//  What we're looking for here is baisc insight into your familiarity with the React and Javascript
// and your general experience at writing code!
// ** TODO: import axios (if you prefer you can install, import and use a different request library) 
// ** TODO: load and display product data from http://localhost:8080/api/products, eg. show product title, price, image
// ** TODO: implement a cart, the ability for users to add products to a cart section
// ** TODO: implement the ability to increment, decrement and remove items from the cart

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
      })
      .catch(err => {
        alert(err);
      });
  }

  addToCart(item) {
    let update;
    let index;
    let count;
    const newItem = {
      data: item,
      quantity: 1
    };

    this.state.cart.map((cartItem, i) => {
      if (cartItem.data.id === item.id) {
        index = i;
        update = true;
        count = cartItem.quantity;
      } else {
        update = false;
      }
    });

    update
      ? this.increment(index, count)
      : this.setState({ cart: this.state.cart.concat(newItem) });
  }

  increment(index, count) {
    const newCart = [...this.state.cart];
    newCart[index].quantity = count + 1;

    this.setState({ cart: newCart });
  }

  decrement(index, count) {
    const newCart = [...this.state.cart];

    if (newCart[index].quantity > 0) {
      newCart[index].quantity = count - 1;

      this.setState({ cart: newCart });
    } else {
      this.removeItem(index);
    }
  }

  removeItem(index) {
    const newCart = [...this.state.cart];
    newCart.splice(index, 1);

    this.setState({ cart: newCart });
  }

  render() {
    const { products, cart } = this.state;
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
              <Cart
                cart={cart}
                increment={(index, count) => this.increment(index, count)}
                decrement={(index, count) => this.decrement(index, count)}
                removeItem={item => this.removeItem(item)}
              />
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
