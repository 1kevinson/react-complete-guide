import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import classes from "./Orders.css";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        //objectToArray
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        console.log(fetchedOrders);
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  render() {
    let orders = this.state.orders.map((order) => (
      <Order
        key={order.id}
        ingredients={order.ingredients}
        price={+order.price}
      />
    ));

    return <div className={classes.Orders}>{orders}</div>;
  }
}

export default withErrorHandler(Orders, axios);
