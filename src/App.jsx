import React from 'react'

//  What we're looking for here is baisc insight into your familiarity with the React and Javascript
// and your general experience at writing code!
// TODO: import axios (if you prefer you can install, import and use a different request library)
// TODO: load and display product data from http://localhost:8080/api/products, eg. show product title, price, image
// TODO: implement a cart, the ability for users to add products to a cart section
// TODO: implement the ability to increment, decrement and remove items from the cart

class App extends React.Component {
  constructor() {
    super();
    this.state = { msg: 'Hello World' };
  }

  componentDidMount() {
  }

  render () {
    const { msg } = this.state
    return (
      <div>
        <h1 className="hello-world">{msg}</h1>
      </div>
    )
  }
}

export default App
