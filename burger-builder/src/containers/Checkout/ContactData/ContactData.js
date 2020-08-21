import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";
import Input from "../../../components/UI/Forms/Input/Input";

class ContactData extends Component {
  helperForm = (elType, elConfigType, elConfigPlaceHolder, elValue) => {
    return {
      elementType: elType,
      elementConfig: {
        type: elConfigType,
        placeholder: elConfigPlaceHolder,
      },
      value: elValue,
    };
  };

  state = {
    orderForm: {
      name: this.helperForm("input", "text", "your name", ""),
      email: this.helperForm("input", "email", "your email", ""),
      street: this.helperForm("input", "text", "street", ""),
      country: this.helperForm("input", "text", "your country", ""),
      zipCode: this.helperForm("input", "text", "your zipcode", ""),
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "",
      },
    },

    loading: false,
  };

  OrderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Arsene Kevin",
        address: {
          street: "TestStreet 1",
          zipCode: "41351",
          country: "Germany",
        },
        email: "kouomeukevin@yahoo.Fr",
      },
      deliveryMethod: "fastest",
    };

    axios
      .post("/orders.json", order)
      .then((res) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  };

  render() {
    const formElArray = [];
    for (let key in this.state.orderForm) {
      formElArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <form>
        {formElArray.map((formEl) => (
          <Input
            key={formEl.id}
            elementType={formEl.config.elementType}
            elementConfig={formEl.config.elementConfig}
            value={formEl.config.value}
          />
        ))}
        <Button btnType="Success" clicked={this.OrderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h3>Enter your Contact Data</h3>
        {form}
      </div>
    );
  }
}

export default ContactData;
