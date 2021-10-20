import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51JG4kFKsh1tOz7JvRyoeONUqZUPP5PqGKJtXprZkjSzSsa5CbXRftAakQ65hnXTtiyznhxRFBzh87UDSaLzJz4GP00yoYiN58Q"
);

const ProcessPayment = ({ handlePayment }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm handlePayment={handlePayment} />
    </Elements>
  );
};

export default ProcessPayment;
