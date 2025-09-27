import express from "express";
import Stripe from "stripe";
import cors from "cors";
import { sendOrderMail } from "./mailer.js";
import bodyParser from "body-parser";

const app = express();
const stripe = new Stripe("sk_test_51P1zH2SFRmRanvxhim3NiSxZFDogScuPLOAGk1vdNK6Y410fUvFJeE4NludpmBfU0qBFIkvbg3C8wWAzrFzJdIm200ol5hOlhQ");

app.use(cors({
  origin: "http://localhost:5173", // Your frontend URL
  credentials: true
}));
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  try {
    const { totalAmount, cartItems, customerInfo } = req.body;

    if (!totalAmount || totalAmount <= 0) {
      return res.status(400).json({ error: "Invalid total amount" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "Pehli Pasand Jewellery - Cart Total",
              description: `${cartItems?.length || 0} items`
            },
            unit_amount: Math.round(totalAmount * 100),
          },
          quantity: 1,
        },
      ],
      // Required for Indian regulations
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['IN']
      },
      customer_email: customerInfo?.email,
      success_url: "http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:5173/cancel",
      metadata: {
        totalAmount: totalAmount.toString(),
        itemCount: cartItems?.length?.toString() || "0"
      }
    });
   
  
    res.json({ id: session.id });
  } catch (error) {
    console.error("Stripe error:", error);
    res.status(500).json({ 
      error: "Failed to create checkout session",
      details: error.message 
    });
  }
});


app.post("/webhook", bodyParser.raw({ type: "application/json" }), async (req, res) => {
  const sig = req.headers["stripe-signature"];
  const endpointSecret = "whsec_pSKZWkevQQFtQ4U93CbjPUnRqEpdqNSk"; 

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.log("Webhook signature verification failed.", err.message);
    return res.sendStatus(400);
  }

  // Handle successful checkout
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const customerEmail = session.customer_email;
    const totalAmount = session.metadata.totalAmount;

    // Send emails
    await sendOrderMail(
      customerEmail,
      "Your Order Confirmation",
      `Thanks for your order. Total: ₹${totalAmount}`,
      `<h2>Thank you for your order!</h2><p>Total: ₹${totalAmount}</p>`
    );

    await sendOrderMail(
      "parvkumra2003@gmail.com",
      "New Order Placed",
      `New order worth ₹${totalAmount}`,
      `<h2>New Order Alert</h2><p>Total: ₹${totalAmount}</p>`
    );
  }

  res.sendStatus(200);
});

app.listen(3000, () => console.log("Server running on port 3000"));