import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState();
  const [paymentSuccess, setPaymentSuccess] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
      setPaymentSuccess();
      setPaymentError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setPaymentError();
      setPaymentSuccess("Congrats! Your payment was successful!");
      handlePayment(paymentMethod.id);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="form-control p-3" />
      <div className="d-flex align-items-center mt-4">
        <span>
          {paymentError && (
            <p className="text-danger fw-bold">{paymentError}</p>
          )}
          {paymentSuccess && (
            <p className="text-success fw-bold">{paymentSuccess}</p>
          )}
          {!paymentSuccess && !paymentError && (
            <span style={{ fontSize: "16px", fontFamily: "Poppins" }}>
              Your service charged will be
              <span className="fw-bold">&nbsp;$500</span>
            </span>
          )}
        </span>
        <button
          className="Submit-button  ps-5 pe-5"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
