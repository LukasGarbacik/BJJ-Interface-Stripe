import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const formatAmountForStripe = (amount) => {
  return Math.round(amount * 100);
};

export default async function handler(req, res) {
  console.log('API Route Hit'); // Ensure the route is hit

  if (req.method === 'POST') {
    const { email } = req.body; // Get email from the request body

    const params = {
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: '5$ Semester Membership',
            },
            unit_amount: formatAmountForStripe(5),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      customer_email: email, // Include the customer's email
    };

    try {
      const checkoutSession = await stripe.checkout.sessions.create(params);
      console.log('Checkout Session:', checkoutSession); // Log for debugging

      res.status(200).json(checkoutSession);
    } catch (error) {
      console.error("Stripe API Error:", error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}