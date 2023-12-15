import React from "react";
import Button from "./Button";
import "./Button.css";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    variant: { control: "text" },
    label: { control: "text" },
    backgroundColor: { control: "color" },
  },
};
const Template = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   variant: "view",
//   children: "Primary Button",
//   backgroundColor: "#ff5733",
// };

export const View = Template.bind({});
View.args = {
  variant: "view",
  label: "View",
  backgroundColor: "#e3342f",
};
// export const AddtoCartDisable = () => (
//   <Button variant="add-to-cart-disable">Add to Cart disable</Button>
// );
export const AddtoCartDisable = Template.bind({});
AddtoCartDisable.args = {
  variant: "add-to-cart-disable",
  label: "Add to Cart disable",
  backgroundColor: "#718096",
};
// export const AddtoCartActive = () => (
//   <Button variant="add-to-cart-active">Add to Cart</Button>
// );
export const AddtoCartActive = Template.bind({});
AddtoCartActive.args = {
  variant: "add-to-cart-active",
  label: "Add to Cart active",
  backgroundColor: "#e3342f",
};
// export const Increment = () => <Button variant="increment">+</Button>;
export const Increment = Template.bind({});
Increment.args = {
  variant: "increment",
  label: "+",
  backgroundColor: "#e3342f",
};
// export const ConfirmOrder = () => (
//   <Button variant="confirmorder">Confirm Order</Button>
// );
export const ConfirmOrder = Template.bind({});
ConfirmOrder.args = {
  variant: "confirmorder",
  label: "Confirm Order",
  backgroundColor: "#e3342f",
};
// export const CloseModal = () => <Button variant="closemodal">X</Button>;
export const CloseModal = Template.bind({});
CloseModal.args = {
  variant: "closemodal",
  label: "X",
  backgroundColor: "#e3342f",
};
// export const Checkout = () => <Button variant="checkout">Checkout</Button>;
export const Checkout = Template.bind({});
Checkout.args = {
  variant: "checkout",
  label: "Checkout",
  backgroundColor: "#e3342f",
};
// export const Continue = () => <Button variant="continue">Continue</Button>;

export const Continue = Template.bind({});
Continue.args = {
  variant: "continue",
  label: "Continue",
  backgroundColor: "#e3342f",
};
