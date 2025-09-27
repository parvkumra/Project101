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
  const endpointSecret = "whsec_UIjEwfggJcTmOgJQE7F0lNfcEioFaNsl";
  
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.log("Webhook signature verification failed.", err.message);
    return res.sendStatus(400);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    
    // Fix email extraction
    const customerEmail = session.customer_email || session.customer_details?.email;
    const totalAmount = session.metadata.totalAmount;
    const customerName = session.customer_details?.name || "Customer";
    
    console.log("Processing payment for:", customerEmail, "Amount:", totalAmount);

    if (!customerEmail) {
      console.error("No customer email found");
      return res.sendStatus(200);
    }

    try {
      // Send emails with proper error handling
      await sendOrderMail(
        customerEmail,
        "Your Order Confirmation - Pehli Pasand Jewellery",
        `Thanks for your order, ${customerName}! Total: ₹${totalAmount}`,
        `<h2>Thank you for your order!</h2>
         <p>Dear ${customerName},</p>
         <p>Your order has been confirmed.</p>
         <p><strong>Order Total: ₹${totalAmount}</strong></p>
         <p>Session ID: ${session.id}</p>`
      );

      await sendOrderMail(
        "parvkumra2003@gmail.com",
        "New Order - Pehli Pasand",
        `New order from ${customerName} - ₹${totalAmount}`,
        `<h2>New Order Alert</h2>
         <p>Customer: ${customerName} (${customerEmail})</p>
         <p>Total: ₹${totalAmount}</p>
         <p>Session: ${session.id}</p>`
      );
      
      console.log("Emails sent successfully to:", customerEmail);
    } catch (emailError) {
      console.error("Failed to send emails:", emailError.message);
    }
  }

  res.sendStatus(200);
});

app.listen(3000, () => console.log("Server running on port 3000"));