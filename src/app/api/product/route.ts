import { NextRequest, NextResponse } from 'next/server';
import { createClient } from 'next-sanity';
import { SanityClient } from 'sanity';
import * as fs from 'fs';
import toast from 'react-hot-toast';
import Stripe from 'stripe';

// Initialize Sanity client
let client: SanityClient = createClient({
  projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
  dataset: "production",
  apiVersion: "2024-06-27",
  useCdn: true
});

// Initialize Stripe
const stripe = new Stripe('sk_test_51Pf5EhCdXu8yBChALVGi9nzI26wGvd549P8gm8gMdguqc3vbnJd2ywGeu6b9XRvYhuiMy83FPlWYclNVlXhWBPtI0058EnbfMj', {
  apiVersion: "2024-06-20"
});

// Handle POST requests (Create Stripe Checkout Session)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Parse the request body
    console.log(body);

    // Create a new Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: body.map((item: { name: string, price: number, quantity: number}) => ({
        price_data: {
          currency: 'usd',
          product_data: { name: item.name },
          unit_amount: item.price * 100
        },
        quantity: item.quantity
      })),
      mode: 'payment',
      success_url: `${req.nextUrl.origin}/cars?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/cancel`
    });

    // Respond with the session ID
    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error((error as { message: string }).message);
    return NextResponse.json({ error: "Error occurred while creating Stripe Checkout Session" });
  }
}

// Handle PUT requests (Fetch data from Sanity)
export async function PUT() {
  try {
    // Fetch data from Sanity
    let response = await client.fetch(`*[_type == "Product"]{
      title,
      price,
      _id,
      details,
      description,
      image,
      category -> {
        name
      }
    }`);

    // Respond with the fetched data
    return NextResponse.json(response);
  } catch (error) {
    console.error((error as { message: string }).message);
    return NextResponse.json({ error: "Error occurred while processing PUT request" });
  }
}

// Main handler function
export default async function handler(req: NextRequest, res: NextResponse) {
  if (req.method === 'POST') {
    return POST(req);
  } else if (req.method === 'PUT') {
    return PUT();
  } else {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }
}
