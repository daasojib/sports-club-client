import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);


const Payment = () => {
  return (
    <div>
      <h2 className="text-3xl">
        Please Complete Your{" "}
        <span className="text-red-600 font-bold">Payment</span> Process!!
      </h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
